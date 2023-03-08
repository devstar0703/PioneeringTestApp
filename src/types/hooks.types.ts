export interface ThemeModeProps {
  themeTemp: string
  barMode: string
  themeMode: string
  onChangeBarMode: (barMode: string) => void
  onChangeThemeMode: (themeMode: string) => void
}

export interface WorkListProps {
  pushWorkReg: (value: string) => void
  changeCountofBtn: () => void
  removeWorkReg: (value: number) => void
  workList: any
  countOfBtn: number
}
