import Vue from 'vue';
import Vuex from 'vuex';

import { alert } from './alert.module';
import { account } from './account.module';
import { users } from './users.module';
import { frachtbrief } from './frachtbrief.module';
import { bahnhof } from './bahnhof.module';
import { adresse } from './adresse.module';
import { erklarung } from './erklarung.module';
import { evu } from './evu.module';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        alert,
        account,
        users,
        frachtbrief,
        bahnhof,
        adresse,
        erklarung,
        evu
    }
});
