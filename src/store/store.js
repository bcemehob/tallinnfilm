export default {
    state: {
        isMenuOpen: false,
        currentVideoUrl: null,
        videoId: null
    },
    getters: {
        getVideoId: state => state.videoId,
        getMenuOpenFlag: state => state.isMenuOpen
    },
    mutations: {
        ...['isMenuOpen', 'videoId']
            .reduce((res, field) => ({
                ...res, [field](state, value) {
                    state[field] = value
                },
            }), {})
    },
    actions: {
        toggleMenu({state, commit}) {
            commit('isMenuOpen', !state.isMenuOpen)
        },
        setVideoId({commit}, id) {
            commit('videoId', id)
        },
        closeVideo({commit}) {
            commit('videoId', null)
        }
    },
};
