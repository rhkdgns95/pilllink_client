import * as StyleThings from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

const {
    default: styled,
    createGlobalStyle,
    ThemeProvider,
    keyframes
} = StyleThings as ThemedStyledComponentsModule<ITheme>;

export { createGlobalStyle, ThemeProvider, keyframes };
export default styled;