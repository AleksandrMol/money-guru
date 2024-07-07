import { IIcon } from "@app/ui/common/interface"

const Book = ({ className }: IIcon) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={ className }>
      <g clipPath="url(#clip0_67_192)">
        <path d="M3 3.00003C3 1.34318 4.34315 3.05176e-05 6 3.05176e-05H18C19.6569 3.05176e-05 21 1.34318 21 3.00003V17C21 17.5523 20.5523 18 20 18H7C5.89543 18 5 18.8955 5 20C5 21.1046 5.89543 22 7 22H20C20.5523 22 21 22.4477 21 23C21 23.5523 20.5523 24 20 24H7C4.79086 24 3 22.2092 3 20C3 19.8876 3.00464 19.7762 3.01374 19.6662C3.0047 19.6121 3 19.5566 3 19.5V3.00003ZM19 3.00003C19 2.44775 18.5523 2.00003 18 2.00003H6C5.44772 2.00003 5 2.44775 5 3.00003V16.5352C5.58835 16.1948 6.27143 16 7 16H19V3.00003ZM7 19C6.44772 19 6 19.4477 6 20C6 20.5523 6.44772 21 7 21H20C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19H7Z" />
      </g>

      <defs>
        <clipPath id="clip0_67_192">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}

export { Book }
