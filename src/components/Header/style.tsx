import styled from 'styled-components'

export const themeIcon = {
  light: (
    <span role="img" className="anticon anticon-github">
      <svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
        <path d="M8 13a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM8 3a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm7 4a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1ZM3 8a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm9.95 3.536.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414Zm-9.9-7.072-.707-.707a1 1 0 0 1 1.414-1.414l.707.707A1 1 0 0 1 3.05 4.464Zm9.9 0a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707Zm-9.9 7.072a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707ZM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"></path>
      </svg>
    </span>
  ),
  dark: (
    <span role="img" className="anticon anticon-github">
      <svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
        <path d="M8.218 1.455c3.527.109 6.327 3.018 6.327 6.545 0 3.6-2.945 6.545-6.545 6.545a6.562 6.562 0 0 1-6.036-4h.218c3.6 0 6.545-2.945 6.545-6.545 0-.91-.182-1.745-.509-2.545m0-1.455c-.473 0-.909.218-1.2.618-.29.4-.327.946-.145 1.382.254.655.4 1.31.4 2 0 2.8-2.291 5.09-5.091 5.09h-.218c-.473 0-.91.22-1.2.62-.291.4-.328.945-.146 1.38C1.891 14.074 4.764 16 8 16c4.4 0 8-3.6 8-8a7.972 7.972 0 0 0-7.745-8h-.037Z"></path>
      </svg>
    </span>
  ),
}

export const LogoMain = (theme: string) => {
  const LogoStyle = styled.div`
    width: 32px;
    height: 32px;
    & svg {
      fill: ${theme === 'dark' ? '#000' : '#FFF'};
    }
  `
  return (
    <LogoStyle>
      <svg viewBox="0 0 1024 1024">
        <path
          opacity="0.1"
          d="M512.42,189.92,795.28,353.23V679.86L512.42,843.17,229.55,679.86V353.23L512.42,189.92m0-151.83L98.06,277.31V755.77L512.42,995,926.77,755.77V277.31L512.42,38.09Z"
        />
        <path d="M511.89,1014,80.9,765.17V267.51l431-248.83,431,248.83V765.17ZM113.81,746.17,511.89,976,910,746.17V286.51L511.89,56.68,113.81,286.51Z" />
        <polygon points="98.06 277.31 229.55 353.23 229.55 679.86 98.06 755.77 98.06 277.31" />
        <polygon points="795.28 353.23 926.77 277.31 926.77 755.77 512.42 995 512.42 843.17 796.53 681.14 795.28 353.23" />
        <rect x="507.77" y="516.15" width="8.23" height="470.99" />
        <rect x="304" y="163.18" width="8.23" height="471.02" transform="translate(-191.22 466.18) rotate(-60)" />
        <rect x="480.7" y="394.43" width="470.43" height="8.23" transform="translate(-103.36 411.36) rotate(-30)" />
      </svg>
    </LogoStyle>
  )
}
export const civitaiLogo = (
  <span role="img" className="anticon civitai">
    <svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor">
      <path d="M2 4.5L8 1l6 3.5v7L8 15l-6-3.5v-7zm6-1.194L3.976 5.653v4.694L8 12.694l4.024-2.347V5.653L8 3.306zm0 1.589l2.662 1.552v.824H9.25L8 6.54l-1.25.73v1.458L8 9.46l1.25-.73h1.412v.824L8 11.105 5.338 9.553V6.447L8 4.895z" />
    </svg>
  </span>
)
