import { ladelisteService } from '../_services';

const state = {
    all: { items: {
        ladelistedata : ''}
    },
    ladelistedata: {},
    
};

const actions = {

    create({ dispatch, commit }, ladeliste) {
        commit('createRequest');

       return ladelisteService.create(ladeliste)
            .then(
                //ladeliste => commit('getAllSuccess', ladeliste),
                error => commit('getAllFailure', error)
            );
    },

    createPDF({ dispatch, commit }, ladeliste) {
        commit('createRequest');

       ladelisteService.update(ladeliste)
            .then(
                ladeliste => {commit('getAllSuccess', ladeliste)},
                error => commit('getAllFailure', error),
                
            ).then(

        ladelisteService.createPDF(ladeliste)
            .then(
                ladeliste => commit('getAllSuccess', ladeliste),
                error => commit('getAllFailure', error)
            ));
    },

    update({ commit }, ladeliste) {
        commit('getAllRequest');

        ladelisteService.update(ladeliste)
            .then(
                ladeliste => {commit('getAllSuccess', ladeliste)},
                error => commit('getAllFailure', error),
                
            );
    },


    getAll({ commit }) {
        commit('getAllRequest');

        ladelisteService.getAll()
            .then(
                ladeliste => commit('getAllSuccess', ladeliste),
                error => commit('getAllFailure', error)
            );
    },

    getById({ commit }, id) {
        commit('getAllRequest');

        ladelisteService.getById(id)
            .then(
                ladeliste => {commit('getAllSuccessD', ladeliste);
            return ladeliste},
                error => commit('getAllFailure', error)
            );
    },

    getPdfById({ commit }, id) {
       // commit('getAllRequest');
console.log(1)
      return  ladelisteService.getPdfById(id)
            .then(
                pdf => commit('getAllPdfSuccess', pdf),
                error => commit('getAllFailure', error)
            );
    },

    delete({ commit }, id) {
        commit('deleteRequest', id);

        ladelisteService.delete(id)
            .then(
                user => commit('deleteSuccess', id),
                error => commit('deleteFailure', { id, error: error.toString() })
            );
    }
};

const mutations = {
    createRequest(state) {
        state.all = { loading: true };
    },
    getAllRequest(state) {
        console.log('loading true')
        state.all = { loading: true };
    },
    getAllSuccess(state, ladeliste) {
        console.log('pdf');
        console.log(ladeliste)
        state.all = { items: ladeliste };
    },
    getAllSuccessD(state, ladeliste) {
        console.log('DDD');
        console.log(ladeliste)
        state.all = { items: ladeliste };
    },
    getAllPdfSuccess(state, pdf) {
        console.log(pdf);
        console.log(state.pdf)
        state.pdf = { items: pdf };
        console.log(state.pdf)
        
    },
    getAllFailure(state, error) {
        
        state.all = { error };
    },
    deleteRequest(state, id) {
        // add 'deleting:true' property to user being deleted
        state.all.items = state.all.items.map(user =>
            user.id === id
                ? { ...user, deleting: true }
                : user
        )
    },
    deleteSuccess(state, id) {
        // remove deleted user from state
        state.all.items = state.all.items.filter(user => user.id !== id)
    },
    deleteFailure(state, { id, error }) {
        // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
        state.all.items = state.items.map(user => {
            if (user.id === id) {
                // make copy of user without 'deleting:true' property
                const { deleting, ...userCopy } = user;
                // return copy of user with 'deleteError:[error]' property
                return { ...userCopy, deleteError: error };
            }

            return user;
        })
    }
};

export const ladeliste = {
    namespaced: true,
    state,
    actions,
    mutations
};
