module.exports = {
    handlerRegister: require('./handlerRegister'),
    handlerAuth: require('./handlerAuth'),

    handlerRetrieveUser: require('./handlerRetrieveUser'),
    handlerRetrieveAUser: require('./handlerRetrieveAUser'),
    handlerUpdateUserName: require('./handlerUpdateUserName'),
    handlerUpdateUserEmail: require('./handlerUpdateUserEmail'),
    handlerUpdateUserPassword: require('./handlerUpdateUserPassword'),

    handlerCreateTask: require('./handlerCreateTask'),
    handlerRetrieveTasks: require('./handlerRetrieveTasks'),
    handlerUpdateTaskTitle: require('./handlerUpdateTaskTitle'),
    handlerUpdateTaskText: require('./handlerUpdateTaskText'),
    handlerUpdateTaskStatus: require('./handlerUpdateTaskStatus'),
    handlerDeleteTask: require('./handlerDeleteTask'),

    handlerCreatePost: require('./handlerCreatePost'),
    handlerRetrievePost: require('./handlerRetrievePost'),
    handlerRetrievePostsFromUser: require('./handlerRetrievePostsFromUser'),
    handlerRetrievePublicPosts: require('./handlerRetrievePublicPosts'),
    handlerUpdatePost: require('./handlerUpdatePost'),
    handlerDeletePost: require('./handlerDeletePost'),

    handlerCreateQuest: require('./handlerCreateQuest'),
    handlerRetrieveQuest: require('./handlerRetrieveQuest'),
    handlerRetrieveQuests: require('./handlerRetrieveQuests'),
    handlerRetrieveMainQuests: require('./handlerRetrieveMainQuests'),
    handlerRetrieveMainRandomQuest: require('./handlerRetrieveMainRandomQuest'),
    handlerRetrieveWorldQuests: require('./handlerRetrieveWorldQuests'),
    handlerRetrieveWorldRandomQuest: require('./handlerRetrieveWorldRandomQuest'),
    handlerUpdateQuest: require('./handlerUpdateQuest'),
    handlerDeleteQuest: require('./handlerDeleteQuest'),
    handlerPlayQuest: require('./handlerPlayQuest'),

    handlerCreateAdventure: require('./handlerCreateAdventure'),
    handlerCreateAdventureStep: require('./handlerCreateAdventureStep'),
    handlerRetrieveAdventure: require('./handlerRetrieveAdventure'),
    handlerRetrieveAdventures: require('./handlerRetrieveAdventures'),
    handlerRetrieveMainAdventures: require('./handlerRetrieveMainAdventures'),
    handlerRetrieveMainRandomAdventure: require('./handlerRetrieveMainRandomAdventure'),
    handlerRetrieveWorldAdventures: require('./handlerRetrieveWorldAdventures'),
    handlerUpdateAdventure: require('./handlerUpdateAdventure'),
    handlerDeleteAdventure: require('./handlerDeleteAdventure'),
    handlerDeleteAdventureStep: require('./handlerDeleteAdventureStep'),
    handlerPlayAdventure: require('./handlerPlayAdventure')

}