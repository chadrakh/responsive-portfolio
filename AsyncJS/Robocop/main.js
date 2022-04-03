// const fetchDM = async () => {  
//              try {
//                 const settings = {
//                 method: 'POST',
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json',
//                     'Cookies': 'ASP.NET_SessionId=1nvhclmbnlaudja4ltcewxjp; .BYM.RoboCop.Forms=F24A25C0FC6B59A98AA03840CF28C405D0F52649F97F9F6E1FC6F6C443A7FF9B0167F1115AE7D4DABDC9177FADE6AEE5DD743558471D9430A31484B9952F4622352D1CA84BCE68DE18A910E4EE083F8CB1E6BC61275700E0E02844DD6A1F3C371DC9AD0DDCF9CF71FB06981896CEC28DBCDED332C19C14975B5622E27FD3F7AAB8DFA68F; __zlcmid=196kn8ihad3Cf4c; _gid=GA1.2.39020724.1647859368; _ga=GA1.2.610843731.1647859368; _fbp=fb.1.1647867475364.1590545703; _hjSessionUser_1703396=eyJpZCI6IjFiMTMwYjliLTkxOTMtNTFmMy04NDhhLWMyNjcyM2FjZWRmYiIsImNyZWF0ZWQiOjE2NDc4Njc0NzU0NjMsImV4aXN0aW5nIjpmYWxzZX0='
//                 },
//                 body: {"PageSize":10,"PageIndex":0,"SortDirection":"Asc","FilterPropertyName":"","FilterType":"","FilterExpression":null}
//             }
//                 const fetchRes = await fetch("./DirectMailProducts.json",settings)
//                 console.log(fetchRes.json());
//             } catch (e) {
//             console.error("oops");
//             }
//         }

//         fetchDM();

const returnDMProducts = async() => {
    
    // Trying to get data from product table and logging success
    try {
        const res = await fetch('./DirectMailProducts.json');
        console.log("Response received");

        const data = await res.json();

        console.log(data);
        const insertedHTML = data.map(product => {
            return `
                <tr class="table-data">
                    <td class="product-body">${product.GlobalCode}</td>
                    <td class="product-body">${product.Status}</td>
                    <td class="product-body">${product.Title}</td>
                </tr>
                <tr class="table-data">
                    <td class="dash"></td>
                </tr>
                `;
            })
            .join('');

        // console.log(insertedHTML); /*testing html */

        document
          .querySelector('#table-data')
          .insertAdjacentHTML("afterbegin", insertedHTML);


    // Error logging when caught
    } catch (err) {
        console.error("Error. Failed to fetch data after ");
    }
}

returnDMProducts();