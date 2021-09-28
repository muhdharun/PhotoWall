//import {database} from '../database/config'
//import database from '../database/config'
import {ref, child, get, set, push, remove, update} from 'firebase/database'
import {database} from '../database/config'

export function startAddingPost(post) { 
    return async (dispatch) => {
        try {
            await set(ref(database, `posts/${post.id}`), post)
            dispatch(addPost(post))
        } catch (error) {
            console.log(error)
        }
        // return database.ref('post').update({[post.id]: post}).then(() => {
        //     dispatch(addPost(post))
        // })
    }
}

export function startLoadingPost() {
    return async (dispatch) => {
        const snapshot = await get(ref(database, 'posts'), 'value')
        let posts = []
        snapshot.forEach((childSnapshot) => {
            posts.push(childSnapshot.val())
        })
        dispatch(loadPosts(posts))
    }
}

export function startRemovingPost(index, id) {

    const updates = {
        [`posts/${id}`]: null,
        [`comments/${id}`]: null
    }

    // return async (dispatch) => {
    //     await remove(ref(database, `posts/${id}`))
    //     await remove(ref(database, `comments/${id}`))
    //     dispatch(removePost(index))
    // }

    return async (dispatch) => {
        await update(ref(database),updates)
        dispatch(removePost(index))
    }

    // return async (dispatch) => {
    //     await remove(ref(database, `posts/${id}`))
    //     dispatch(removePost(index))
    // }
}

export function startAddingComment(comment, postId) {
    return async (dispatch) => {
        try{
            await set(push(ref(database, `comments/${postId}`)), comment)
            dispatch(addComment(comment, postId))
        }
        catch (error) {
        console.log(error)
        }
    }
}

export function startLoadingComments() {
    return async (dispatch) => {
        const snapshot = await get(ref(database,'comments'), 'value')
        let comments = {}
        snapshot.forEach((childSnapshot) => {
            comments[childSnapshot.key] = Object.values(childSnapshot.val())
        })
        dispatch(loadComments(comments))
    }
}

export function loadComments(comments) {
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}

export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index
    }
}

export function addPost(post) {
    return {
        type: 'ADD_POST',
        post
    }
}

export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}

export function loadPosts(posts) {
    return {
        type: 'LOAD_POSTS',
        posts
    }
}