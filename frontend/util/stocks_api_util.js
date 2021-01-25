export const signup = user => (
    $.ajax({
        url: '/api/users',
        method: 'POST',
        data: { user }
    })
);
