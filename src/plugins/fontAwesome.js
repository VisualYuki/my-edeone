import Vue from "vue";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
Vue.component("FontAwesomeIcon", FontAwesomeIcon);

import {faVk} from "@fortawesome/free-brands-svg-icons";
library.add([faVk]);
