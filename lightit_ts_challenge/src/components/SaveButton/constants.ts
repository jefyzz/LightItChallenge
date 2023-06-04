import { DropdownItem } from "../Dropdown";

export const saveDropdownItems: DropdownItem[] = [
  {
    label: "Guardar y salir",
    onPress() {
      console.log('Pressed button', 'GyS')
    },
  },
  {
    label: "Guardar y continuar",
    onPress() {
      console.log('Pressed button', 'GyC')
    },
  },
  {
    label: "Salir sin guardar",
    onPress() {
      console.log('Pressed button', 'SsG')
    },
  }
]