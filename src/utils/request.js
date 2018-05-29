

export default function request(method, url, body) {
    method = method.toUpperCase();
    if (method === 'GET') {
        // fetch的GET不允许有body，参数只能放在url中
        body = undefined;
    } else {
        body = body && JSON.stringify(body);
    }
    url = 'http://localhost:4000' + url;

    return fetch(url, {
        method,
        // headers: {
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json'
        // },
        body
    })
        .then((res) => {
            if (res.status === 401) {
                // this.props.history.push('/login');
                window.location.href="/login" ;
                return Promise.reject('Unauthorized.');
            } else if(res.status === 200){
                // const token = res.headers.get('access-token');
                // if (token) {
                //     sessionStorage.setItem('access_token', token);
                // }
                return res.json();
            }
        });
}

export const get = url => request.call(this,'GET', url);
export const post = (url, body) => request.call(this,'POST', url, body);
export const put = (url, body) => request.call(this,'PUT', url, body);
export const del = (url, body) => request.call(this,'DELETE', url, body);