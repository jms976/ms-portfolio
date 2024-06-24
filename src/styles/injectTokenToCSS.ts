const convertToKebabCase = (value: string) => value.replace(/([A-Z0-9])+/g, '-$&');

const disableConvertList = ['h1', 'h2', 'h3', 'h4'];

const convertGroupName = (group: string) => convertToKebabCase(group).toLowerCase();

const convertTokenName = (token: string) =>
  (disableConvertList.includes(token) ? token : convertToKebabCase(token)).toLowerCase();

export const injectTokenToCSS = (tokenGroup: Record<string, Record<string, string | number>>) => {
  const cssVariables = Object.entries(tokenGroup)
    .flatMap(([group, tokens]) =>
      Object.entries(tokens).map(([key, value]) => `--${convertGroupName(group)}-${convertTokenName(key)}: ${value};`),
    )
    .join(' ');

  const styleElement = document.createElement('style');
  styleElement.classList.add('ms-design-tokens');
  document.head.appendChild(styleElement);

  styleElement.sheet?.insertRule(`:root {
    ${cssVariables}
  }`);
};
