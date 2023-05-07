import { createStyles, css, cx } from 'antd-style'
import { rgba } from 'polished'

export const useStyle = createStyles(({ token }, props: { prefix?: string; maxHeight?: boolean }) => {
  const { prefix, maxHeight } = props
  const commonHandle = css`
    position: relative;
    &::before {
      content: '';
      position: absolute;
      z-index: 50;
      transition: all 0.3s ease-in-out;
    }
    &:hover,
    &:active {
      &::before {
        background: #ffffff70;
        box-shadow: #fff 0px 0px 8px, #fff 0px -6px 16px, #fff 0px -24px 60px;
      }
    }
  `

  const commonToggle = css`
    cursor: pointer;

    position: absolute;
    z-index: 1001;

    color: rgba(255, 255, 255, 0.75);

    opacity: 1;
    background: #ffffff30;
    border-color: ${token.colorBorder};
    border-style: solid;
    border-width: 1px;
    border-radius: 60px;
    padding: 4px;

    transition: opacity 0.1s;
    transition-duration: 350ms;
    &:hover {
      color: ${token.colorTextSecondary};
      background: rgba(255, 255, 255, 0.3);
      transition-duration: 150ms;
    }
  `

  const offset = 6
  const toggleLength = 10
  const toggleShort = 10

  return {
    container: cx(
      prefix,
      css`
        position: relative;
        flex-shrink: 0;
        // border: 0 solid ${token.colorSplit};
        // border: 1px solid rgba(253, 253, 253, 0.1);
        border-radius: 12px;
        // overflow: hidden;
        margin: 4px 16px;
        // &:hover {
        //   .${prefix}-toggle {
        //     opacity: 1;
        //   }
        // }
      `
    ),
    toggleLeft: cx(
      `${prefix}-toggle`,
      `${prefix}-toggle-left`,
      commonToggle,
      css`
        top: 6px;
        left: ${offset}px;

        width: ${toggleShort}px;
        height: ${toggleLength}px;

        border-right-width: 0;
        border-radius: 60px;
      `
    ),
    toggleRight: cx(
      `${prefix}-toggle`,
      `${prefix}-toggle-right`,
      commonToggle,
      css`
        top: 6px;
        right: ${offset}px;

        width: ${toggleShort}px;
        height: ${toggleLength}px;

        border-left-width: 0;
        border-radius: 60px;
      `
    ),
    toggleTop: cx(
      `${prefix}-toggle`,
      `${prefix}-toggle-top`,
      commonToggle,
      css`
        top: -${offset}px;
        left: 50%;

        width: ${toggleLength}px;
        height: ${toggleShort}px;

        border-bottom-width: 0;
        border-radius: 60px;
      `
    ),
    toggleBottom: cx(
      `${prefix}-toggle`,
      `${prefix}-toggle-bottom`,
      commonToggle,
      css`
        bottom: ${offset}px;
        right: 6px;

        width: ${toggleLength}px;
        height: ${toggleShort}px;

        border-top-width: 0;
        border-radius: 60px;
      `
    ),
    fixed: cx(
      `${prefix}-fixed`,
      css`
        position: relative;
        overflow: hidden;
        background: ${rgba(token.colorBgContainer, 0.2)};
        backdrop-filter: blur(20px);

        ${maxHeight ? 'height: 100% !important;' : ''}
      `
    ),
    float: cx(
      `${prefix}-float`,
      css`
        position: relative;
        z-index: 2000;

        overflow: hidden;

        background: ${rgba(token.colorBgElevated, 0.2)};
        backdrop-filter: blur(20px);
        border-radius: 8px;
        box-shadow: ${token.boxShadowSecondary};
      `
    ),
    leftHandle: cx(
      css`
        ${commonHandle};
        &::before {
          left: 50%;
          width: 1px;
          height: 100%;
        }
      `,
      `${prefix}-left-handle`
    ),
    rightHandle: cx(
      css`
        ${commonHandle};
        &::before {
          right: 50%;
          width: 1px;
          height: 100%;
        }
      `,
      `${prefix}-right-handle`
    ),
    topHandle: cx(
      `${prefix}-top-handle`,
      css`
        ${commonHandle};
        &::before {
          top: 50%;
          width: 100%;
          height: 1px;
        }
      `
    ),
    bottomHandle: cx(
      `${prefix}-bottom-handle`,
      css`
        ${commonHandle};
        &::before {
          bottom: 50%;
          width: 100%;
          height: 1px;
        }
      `
    ),
  }
})
