export const requestUser = userId => (
    $.ajax({
        url: `/api/users/${userId}`
    })
)