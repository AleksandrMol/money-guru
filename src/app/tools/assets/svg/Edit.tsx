import type { IIcon } from './interface'

const Edit = ({ className }: IIcon) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={ className }>
      <path d="M12.8171 2.04044C13.7283 2.95167 13.7283 4.42905 12.8171 5.34027L5.36947 12.7879C5.14646 13.0109 4.87386 13.178 4.57394 13.2756L2.62998 13.9079C1.59359 14.2451 0.612453 13.2639 0.949585 12.2275L1.58195 10.2836C1.67952 9.98364 1.84663 9.71105 2.06964 9.48803L9.51723 2.04044C10.4285 1.12922 11.9058 1.12922 12.8171 2.04044ZM10.46 2.98325L3.01245 10.4308C2.93811 10.5052 2.88241 10.596 2.84989 10.696L2.21752 12.64L4.16149 12.0076C4.26146 11.9751 4.35232 11.9194 4.42666 11.8451L11.8743 4.39746C12.2648 4.00694 12.2648 3.37378 11.8743 2.98325C11.4837 2.59273 10.8506 2.59273 10.46 2.98325ZM6.66666 14C6.29847 14 5.99999 14.2985 5.99999 14.6667C5.99999 15.0349 6.29847 15.3333 6.66666 15.3333H14C14.3682 15.3333 14.6667 15.0349 14.6667 14.6667C14.6667 14.2985 14.3682 14 14 14H6.66666Z" fill="#F6F6F6"/>
    </svg>
  )
}

export { Edit }

