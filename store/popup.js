export const state = () => ({
    isVisible: false,
    macchinario: null
})

export const mutations = {
    show(state, macchinario = null) {
        state.isVisible = true;
        state.macchinario = macchinario;
    },
    hide(state) {
        state.isVisible = false;
        state.macchinario = null;
    }
}