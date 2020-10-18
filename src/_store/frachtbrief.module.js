import { frachtbriefService } from '../_services';

const state = {
    all: {},
    pdf: {test: 'test'}
};

const actions = {

    create({ dispatch, commit }, frachtbrief) {
        commit('createRequest');

        frachtbriefService.create(frachtbrief)
            .then(
                frachtbrief => commit('getAllSuccess', frachtbrief),
                error => commit('getAllFailure', error)
            );
    },

    createPDF({ dispatch, commit }, frachtbrief) {
        commit('createRequest');

       frachtbriefService.update(frachtbrief)
            .then(
                frachtbrief => {commit('getAllSuccess', frachtbrief)},
                error => commit('getAllFailure', error),
                
            ).then(

        frachtbriefService.createPDF(frachtbrief)
            .then(
                frachtbrief => commit('getAllSuccess', frachtbrief),
                error => commit('getAllFailure', error)
            ));
    },

    update({ commit }, frachtbrief) {
        commit('getAllRequest');

        frachtbriefService.update(frachtbrief)
            .then(
                frachtbrief => {commit('getAllSuccess', frachtbrief)},
                error => commit('getAllFailure', error),
                
            );
    },


    getAll({ commit }) {
        commit('getAllRequest');

        frachtbriefService.getAll()
            .then(
                frachtbrief => commit('getAllSuccess', frachtbrief),
                error => commit('getAllFailure', error)
            );
    },

    getById({ commit }, id) {
        commit('getAllRequest');

        frachtbriefService.getById(id)
            .then(
                frachtbrief => commit('getAllSuccess', frachtbrief),
                error => commit('getAllFailure', error)
            );
    },

    getPdfById({ commit }, id) {
        commit('getAllRequest');
console.log(1)
      return  frachtbriefService.getPdfById(id)
            .then(
                pdf => commit('getAllPdfSuccess', pdf),
                error => commit('getAllFailure', error)
            );
    },

    delete({ commit }, id) {
        commit('deleteRequest', id);

        frachtbriefService.delete(id)
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
        state.all = { loading: true };
    },
    getAllSuccess(state, frachtbrief) {
        console.log('pdf');
        state.all = { items: frachtbrief };
    },
    getAllPdfSuccess(state, pdf) {
        console.log(pdf);
        console.log(state.pdf)
        state.pdf = { items: pdf };
        console.log(state.pdf)
        
    },
    getAllFailure(state, error) {
        console.log('pdf');
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

export const frachtbrief = {
    namespaced: true,
    state,
    actions,
    mutations
};
