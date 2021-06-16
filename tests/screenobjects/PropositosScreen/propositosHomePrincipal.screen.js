import AppScreen from '../app.screen';
import Gestures from '../../helpers/gestures'
import { DEFAULT_TIMEOUT } from '../../constants/constants';

const SELECTORS = {
    HOME: 'strong.title-purpose',
    TITLE: 'strong.title-purpose',
    
    //BUTTONS
    BUTTON_INGRESAR: 'app-purpose div > div ion-row',
    
};


class PropositosHomePrincipalScreen extends AppScreen {

    constructor() {
        super(SELECTORS.HOME);
    }

    waitForIsShown(isShown = true) {
        return $(SELECTORS.HOME).waitForDisplayed({
            timeout: DEFAULT_TIMEOUT,
            reverse: !isShown,
        });
    }

    isDisplayed() {
        return $(SELECTORS.HOME).isDisplayed();
    }

    get tituloPropositoHomeBienestar() {
        return $(SELECTORS.TITLE);
    }
    get botonIngresarOpcion() {
        return $(SELECTORS.BUTTON_INGRESAR);
    }
}
export default new PropositosHomePrincipalScreen();
