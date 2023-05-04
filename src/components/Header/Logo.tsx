import React from 'react'
import { LogoMain } from './style'

interface LogoProps {
  size?: number
  style?: React.CSSProperties
  themeMode: 'dark' | 'light'
}

const Logo: React.FC<LogoProps> = ({ size = 20, style, themeMode }) => {
  return <LogoMain theme={themeMode} />
}

export default React.memo(Logo)
