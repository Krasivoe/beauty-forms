import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css'; //icons
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi'
    },
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: '#273b98',
                    secondary: '#819ec7',
                    myDark: '#212529',
                    myBlue: '#5277f7',
                    myYellow: '#ffc800'
                }
            }
        }
    }
});
