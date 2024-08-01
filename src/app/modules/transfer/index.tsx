import { BallRadioButton } from '@app/ui'
import './index.scss'
import { sourceList, targetList } from './tools/mock/ball-buttons-lists'
import { Input } from '@app/ui'
import { Button } from '@app/ui'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

interface ITransferForm {
  date: string,
  from: string,
  to: string,
  summ: string,
}

/**
* Страница транзакций
* @return JSX
*/
const TransferPage = () => {
  const { type } = useParams() as { type: string }

  const { register, handleSubmit } = useForm<ITransferForm>()

  const handleOnSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form onSubmit={ handleOnSubmit } className="transfer-form__container">
      <h1 className="transfer-form__title">
        { type === 'plus' && 'Новый доход' }
        { type === 'minus' && 'Новая трата' }
      </h1>

      <h2 className='transfer-form__smile-title'>
        Дата
      </h2>

      {/* TODO: Тут будет календарь */}
      <div className="px-8 py-1 text-xs rounded-[10px] shadow-border">
        Тут будет календарь
      </div>

      <h2 className='transfer-form__smile-title'>
        С источника
      </h2>
    
      <div className="transfer-form__radio-list">
        {
          sourceList.map((el) => 
            <BallRadioButton
              key={ el.id }
              { ...el }
              inputProps={{
                ...register('from')
              }}
            />
          )
        }
      </div>

      <h2 className='transfer-form__smile-title'>
        На счёт
      </h2>
      
      <div className="transfer-form__radio-list">
        {
          targetList.map((el) => 
            <BallRadioButton
              key={ el.id }
              { ...el }
              inputProps={{
                ...register('to')
              }}
            />
          )
        }
      </div>

      <h2 className='transfer-form__smile-title'>
        Сумма
      </h2>

      <Input
        id='transaction_summ'
        type='number'
        side='right'
        inputProps={{
          placeholder: 'Введите сумму',
          ...register('summ')
        }}
      />

      <Button
        className='w-full justify-center'
        buttonProps={{
          type: 'submit'
        }}
      >
        Сохранить
      </Button>
    </form>
  )
}

export { TransferPage }
