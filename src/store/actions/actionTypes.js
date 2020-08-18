export const NEW_POST ="NEW_POST";
export const REG_USER='REG_USER'
export const LOGIN_USER="LOGIN_USER"
export const LOGOUT_USER='LOGOUT_USER'


export function NewPost(post) {
    return {
        type: NEW_POST,
        post
    };
}

