export default {
    namespaced: true, // 开启该模块的命名空间
    state: {
        name: 'shopcar'
    },
    getters: {
        revName(state) {
            return state.name.split('').reverse().join('');
        }
    },
};