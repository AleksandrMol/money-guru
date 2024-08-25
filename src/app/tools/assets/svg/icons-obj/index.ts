import { IIcon, TIconFunction } from "@app/ui/common/interface";
import { ArrowDown } from "../ArrowDown";
import { Book } from "../Book";
import { Edit } from "../Edit";
import { PieChart } from "../PieChart";
import { Plus } from "../Plus";

interface IIconsObj {
  [N: string]: TIconFunction 
}

/**
 * объект с иконками
 */
const iconsObj: IIconsObj = {
  'arrow-down': ArrowDown,
  "book": Book,
  "pie-chart": PieChart,
  "edit": Edit,
  "plus": Plus,
}

export { iconsObj }
export type { IIconsObj }