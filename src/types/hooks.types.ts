export interface ThemeModeProps {
  themeTemp: string
  barMode: string
  themeMode: any
  onChangeBarMode: (barMode: string) => void
  onChangeThemeMode: (themeMode: string) => void
}

export interface WorkListProps {
  pushWorkReg: (value: string) => void
  changeCountofBtn: () => void
  removeWorkReg: (value: number) => void
  clearStorage: () => void
  workList: any
  countOfBtn: number
}
