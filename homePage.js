// const getTrendingVideos = ()=>{
//     const request = fetch("https://youtube138.p.rapidapi.com/v2/trending", {
//         method: 'GET',
//         headers: {
//             "x-rapidapi-host":"youtube138.p.rapidapi.com",
// 	        "x-rapidapi-key":"f3c68577a7msh344713c05e7dce5p11838fjsn88289acea70e"
//         }
//     })

//     request.then((res)=>{
//         res.json().then((res)=>{
//             console.log(res);
//         }).catch((err)=>{
//             console.log(err);
//         })
//     }).catch((err)=>{
//         console.log(err);
//     })
// }

// getTrendingVideos();

const getAutoSuggest = (val) =>{
    let dummyObj = {
        "query": "comedy",
        "results": [
            "comedy",
            "comedy movies",
            "comedy club",
            "comedy stand up",
            "comedy movies 2025 full movie",
            "comedy nights with champions",
            "comedy darbar",
            "comedy scenes telugu",
            "comedy movies hindi full",
            "comedy movies free",
            "comedy special",
            "comedy scenes tamil",
            "comedy video",
            "comedy central"
        ]
    }

    if(!val.length){
        dummyObj = {};
    }
    // console.log("API called with "+val);
    // const request = fetch(`https://youtube138.p.rapidapi.com/auto-complete/?q=${val}&hl=en&gl=US`, {
    //     method: "GET",
    //     headers: {
    //         "x-rapidapi-host":"youtube138.p.rapidapi.com",
	//        "x-rapidapi-key":"f3c68577a7msh344713c05e7dce5p11838fjsn88289acea70e",
    //     },
    // });

    // request.then((response)=>{
    //     response.json().then((data)=>{
    //         console.log(data);
            renderSuggestionList(dummyObj);
    //     });
    // }).catch((err)=>{
    //     alert("Suggest error: ", err.message);
    // })
}

let id = null;

const getSmartAutoSuggest = (txt)=>{
    clearTimeout(id);

    id = setTimeout(()=>{
        getAutoSuggest(txt);
    }, 600);
}

const data = {
    "status": "success",
    "list": [
        {
            "type": "video",
            "title": "이엔이 사랑으로 반죽하는 날🍅",
            "videoId": "1v-Q_emAeN8",
            "author": "Stray Kids",
            "authorId": "UC9rMiEjNaCSsebs31MRDCRA",
            "authorUrl": "/channel/UC9rMiEjNaCSsebs31MRDCRA",
            "authorVerified": true,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/rKpjNGv_TGpBsNXsm46VAxZqy7_uf6wWCnw-ZLnFHV7jOzbUvF9tNMlZMKl_djtzaNCDyLQ0VQ=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/rKpjNGv_TGpBsNXsm46VAxZqy7_uf6wWCnw-ZLnFHV7jOzbUvF9tNMlZMKl_djtzaNCDyLQ0VQ=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/rKpjNGv_TGpBsNXsm46VAxZqy7_uf6wWCnw-ZLnFHV7jOzbUvF9tNMlZMKl_djtzaNCDyLQ0VQ=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/rKpjNGv_TGpBsNXsm46VAxZqy7_uf6wWCnw-ZLnFHV7jOzbUvF9tNMlZMKl_djtzaNCDyLQ0VQ=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/rKpjNGv_TGpBsNXsm46VAxZqy7_uf6wWCnw-ZLnFHV7jOzbUvF9tNMlZMKl_djtzaNCDyLQ0VQ=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/rKpjNGv_TGpBsNXsm46VAxZqy7_uf6wWCnw-ZLnFHV7jOzbUvF9tNMlZMKl_djtzaNCDyLQ0VQ=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/1v-Q_emAeN8/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/1v-Q_emAeN8/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/1v-Q_emAeN8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/1v-Q_emAeN8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/1v-Q_emAeN8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/1v-Q_emAeN8/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/1v-Q_emAeN8/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/1v-Q_emAeN8/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "",
            "descriptionHtml": "",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770547322,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "🔴 Brisbane Airport LIVE @ NIGHT w/ James & Matty + ATC | Brisbane, Australia 🇦🇺✈️",
            "videoId": "VHBbAEjSk0M",
            "author": "Only Planes Network",
            "authorId": "UCWgNxEKv9P7WI97UQS3bUFA",
            "authorUrl": "/channel/UCWgNxEKv9P7WI97UQS3bUFA",
            "authorVerified": false,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/svhAB5fDf8ewILwA_77oBS1sfKKwoRB9eM27zXIChhzQaDgc9NGuV5LTI5R2Q34viLYqPxmRnw=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/svhAB5fDf8ewILwA_77oBS1sfKKwoRB9eM27zXIChhzQaDgc9NGuV5LTI5R2Q34viLYqPxmRnw=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/svhAB5fDf8ewILwA_77oBS1sfKKwoRB9eM27zXIChhzQaDgc9NGuV5LTI5R2Q34viLYqPxmRnw=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/svhAB5fDf8ewILwA_77oBS1sfKKwoRB9eM27zXIChhzQaDgc9NGuV5LTI5R2Q34viLYqPxmRnw=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/svhAB5fDf8ewILwA_77oBS1sfKKwoRB9eM27zXIChhzQaDgc9NGuV5LTI5R2Q34viLYqPxmRnw=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/svhAB5fDf8ewILwA_77oBS1sfKKwoRB9eM27zXIChhzQaDgc9NGuV5LTI5R2Q34viLYqPxmRnw=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/VHBbAEjSk0M/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/VHBbAEjSk0M/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/VHBbAEjSk0M/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/VHBbAEjSk0M/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/VHBbAEjSk0M/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/VHBbAEjSk0M/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/VHBbAEjSk0M/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/VHBbAEjSk0M/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "✈️ Plane spotting is our passion, and Only Planes is where it takes flight! Welcome! \n\n🔴 LIVE from Brisbane International Airport (BNE/YBBN) with James & Matty!\n\n🛋️ Join the Lurkers...",
            "descriptionHtml": "✈️ Plane spotting is our passion, and Only Planes is where it takes flight! Welcome! <br><br>🔴 LIVE from Brisbane International Airport (BNE/YBBN) with James &amp; Matty!<br><br>🛋️ Join the Lurkers...",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770547322,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "Donald Trump LIVE | US President Donald Trump Responds To Obama Ape Video Controversy | N18G",
            "videoId": "6aEvjjrrS_E",
            "author": "CNN-News18",
            "authorId": "UCef1-8eOpJgud7szVPlZQAQ",
            "authorUrl": "/channel/UCef1-8eOpJgud7szVPlZQAQ",
            "authorVerified": true,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/6aEvjjrrS_E/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/6aEvjjrrS_E/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/6aEvjjrrS_E/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/6aEvjjrrS_E/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/6aEvjjrrS_E/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/6aEvjjrrS_E/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/6aEvjjrrS_E/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/6aEvjjrrS_E/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "U.S. President Donald Trump has defended himself amid renewed controversy over a video involving Barack Obama that critics have condemned as offensive, saying he “didn’t make a mistake.”...",
            "descriptionHtml": "U.S. President Donald Trump has defended himself amid renewed controversy over a video involving Barack Obama that critics have condemned as offensive, saying he “didn’t make a mistake.”...",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770547322,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "FNS | PRX vs GE - VCT Pacific Kickoff #VCTWatchparty !INZONE",
            "videoId": "wy6dVqebJwE",
            "author": "FNS",
            "authorId": "UC0l4egqFkC7XQvZFW1qajPg",
            "authorUrl": "/channel/UC0l4egqFkC7XQvZFW1qajPg",
            "authorVerified": false,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/ElgtYlQGRRgUxXc21R3C1SlVZZs_xqybdiR0B59TOUOP-vzgnR6dMRB2o65yicSNCvgtH9Oijw=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/ElgtYlQGRRgUxXc21R3C1SlVZZs_xqybdiR0B59TOUOP-vzgnR6dMRB2o65yicSNCvgtH9Oijw=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/ElgtYlQGRRgUxXc21R3C1SlVZZs_xqybdiR0B59TOUOP-vzgnR6dMRB2o65yicSNCvgtH9Oijw=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/ElgtYlQGRRgUxXc21R3C1SlVZZs_xqybdiR0B59TOUOP-vzgnR6dMRB2o65yicSNCvgtH9Oijw=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/ElgtYlQGRRgUxXc21R3C1SlVZZs_xqybdiR0B59TOUOP-vzgnR6dMRB2o65yicSNCvgtH9Oijw=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/ElgtYlQGRRgUxXc21R3C1SlVZZs_xqybdiR0B59TOUOP-vzgnR6dMRB2o65yicSNCvgtH9Oijw=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/wy6dVqebJwE/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/wy6dVqebJwE/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/wy6dVqebJwE/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/wy6dVqebJwE/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/wy6dVqebJwE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/wy6dVqebJwE/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/wy6dVqebJwE/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/wy6dVqebJwE/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "Be sure to give the video a 👍🏽 LIKE and SUBSCRIBE ❤️ if you enjoyed yourself watching it!\n\nTo stay updated, hit the notification bell 🛎 and get an alert for every upload!\n\n🔴...",
            "descriptionHtml": "Be sure to give the video a 👍🏽 LIKE and SUBSCRIBE ❤️ if you enjoyed yourself watching it!<br><br>To stay updated, hit the notification bell 🛎 and get an alert for every upload!<br><br>🔴...",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770547322,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "WENZ VAULT!",
            "videoId": "XNmIQuJYqM0",
            "author": "Wenzel TCG",
            "authorId": "UCXwr2GuXJNzt_AfnmpQ64sw",
            "authorUrl": "/channel/UCXwr2GuXJNzt_AfnmpQ64sw",
            "authorVerified": false,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/jyb36VGQ9_JX8kSFb8lK4axC8UFXHg3mOYrAAC97I3AwCgSNyzgd-Rsf-Te2k_d2MM7XIGbU8Q=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/jyb36VGQ9_JX8kSFb8lK4axC8UFXHg3mOYrAAC97I3AwCgSNyzgd-Rsf-Te2k_d2MM7XIGbU8Q=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/jyb36VGQ9_JX8kSFb8lK4axC8UFXHg3mOYrAAC97I3AwCgSNyzgd-Rsf-Te2k_d2MM7XIGbU8Q=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/jyb36VGQ9_JX8kSFb8lK4axC8UFXHg3mOYrAAC97I3AwCgSNyzgd-Rsf-Te2k_d2MM7XIGbU8Q=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/jyb36VGQ9_JX8kSFb8lK4axC8UFXHg3mOYrAAC97I3AwCgSNyzgd-Rsf-Te2k_d2MM7XIGbU8Q=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/jyb36VGQ9_JX8kSFb8lK4axC8UFXHg3mOYrAAC97I3AwCgSNyzgd-Rsf-Te2k_d2MM7XIGbU8Q=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/XNmIQuJYqM0/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/XNmIQuJYqM0/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/XNmIQuJYqM0/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/XNmIQuJYqM0/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/XNmIQuJYqM0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/XNmIQuJYqM0/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/XNmIQuJYqM0/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/XNmIQuJYqM0/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "Shop: https://wenzeltcg.com\n\nDiscord: https://discord.gg/wenzeltcg",
            "descriptionHtml": "Shop: https://wenzeltcg.com<br><br>Discord: https://discord.gg/wenzeltcg",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770547322,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "【MINECRAFT #NijiENterprise】Build Pink Base! No Tech Re:Farm #2【Maria Marionette | NIJISANJI EN】",
            "videoId": "-_LC42TdN8k",
            "author": "Maria Marionette 【NIJISANJI EN】",
            "authorId": "UCwaS8_S7kMiKA3izlTWHbQg",
            "authorUrl": "/channel/UCwaS8_S7kMiKA3izlTWHbQg",
            "authorVerified": true,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/Q2fKA6MbNRvVzMKcM4BoJvoOBH73hIbt1FrK8BBHsrzraMel514sP_9IcW3MBOsfZOO6qNd_EA=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/Q2fKA6MbNRvVzMKcM4BoJvoOBH73hIbt1FrK8BBHsrzraMel514sP_9IcW3MBOsfZOO6qNd_EA=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/Q2fKA6MbNRvVzMKcM4BoJvoOBH73hIbt1FrK8BBHsrzraMel514sP_9IcW3MBOsfZOO6qNd_EA=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/Q2fKA6MbNRvVzMKcM4BoJvoOBH73hIbt1FrK8BBHsrzraMel514sP_9IcW3MBOsfZOO6qNd_EA=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/Q2fKA6MbNRvVzMKcM4BoJvoOBH73hIbt1FrK8BBHsrzraMel514sP_9IcW3MBOsfZOO6qNd_EA=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/Q2fKA6MbNRvVzMKcM4BoJvoOBH73hIbt1FrK8BBHsrzraMel514sP_9IcW3MBOsfZOO6qNd_EA=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/-_LC42TdN8k/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/-_LC42TdN8k/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/-_LC42TdN8k/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/-_LC42TdN8k/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/-_LC42TdN8k/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/-_LC42TdN8k/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/-_LC42TdN8k/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/-_LC42TdN8k/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "『Streamlabs Donations』https://streamlabs.com/mariamarionettenijisanjien/tip\n\n『Membaship Link』https://www.youtube.com/channel/UCwaS8_S7kMiKA3izlTWHbQg/join\n   ~Membership Perks~\n♡Original...",
            "descriptionHtml": "『Streamlabs Donations』https://streamlabs.com/mariamarionettenijisanjien/tip<br><br>『Membaship Link』https://www.youtube.com/channel/UCwaS8_S7kMiKA3izlTWHbQg/join<br>   ~Membership Perks~<br>♡Original...",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770547322,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "DRX vs FS / GE vs PRX - VCT Pacific - Kickoff - Lower Bracket R3 - Day 12",
            "videoId": "MK5zLFgN3zY",
            "author": "VALORANT Champions Tour Pacific",
            "authorId": "UCA8fUfoBLWyUpAZTbXB0uoA",
            "authorUrl": "/channel/UCA8fUfoBLWyUpAZTbXB0uoA",
            "authorVerified": false,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/VOc_w4uosYmEx2SWblQVfwY6QuNVnuoEwPYGLK30X9S2MZwYyEwicGK-DwRsiRlbqnSMxTYTBA=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/VOc_w4uosYmEx2SWblQVfwY6QuNVnuoEwPYGLK30X9S2MZwYyEwicGK-DwRsiRlbqnSMxTYTBA=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/VOc_w4uosYmEx2SWblQVfwY6QuNVnuoEwPYGLK30X9S2MZwYyEwicGK-DwRsiRlbqnSMxTYTBA=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/VOc_w4uosYmEx2SWblQVfwY6QuNVnuoEwPYGLK30X9S2MZwYyEwicGK-DwRsiRlbqnSMxTYTBA=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/VOc_w4uosYmEx2SWblQVfwY6QuNVnuoEwPYGLK30X9S2MZwYyEwicGK-DwRsiRlbqnSMxTYTBA=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/VOc_w4uosYmEx2SWblQVfwY6QuNVnuoEwPYGLK30X9S2MZwYyEwicGK-DwRsiRlbqnSMxTYTBA=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/MK5zLFgN3zY/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/MK5zLFgN3zY/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/MK5zLFgN3zY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/MK5zLFgN3zY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/MK5zLFgN3zY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/MK5zLFgN3zY/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/MK5zLFgN3zY/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/MK5zLFgN3zY/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "VCT Pacific - Kickoff - Lower Bracket R3 - Day 12\n\nMATCH 1 : DRX vs FS\nMATCH 2 : GE vs PRX",
            "descriptionHtml": "VCT Pacific - Kickoff - Lower Bracket R3 - Day 12<br><br>MATCH 1 : DRX vs FS<br>MATCH 2 : GE vs PRX",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770547322,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "CAIRN IS INSANE! Can we finish tonight?",
            "videoId": "Xx0um6DlY7Y",
            "author": "Beacon of Nick",
            "authorId": "UC8dUuzeMdid2afzzKo31B_g",
            "authorUrl": "/channel/UC8dUuzeMdid2afzzKo31B_g",
            "authorVerified": false,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/A4Twi84fwv4yHQPbhaFnhy9PGO1rPU4zJ_s0zVRB2G6o9Lt-nuuE5AVjK5-Gs5rf4AnWecQH=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/A4Twi84fwv4yHQPbhaFnhy9PGO1rPU4zJ_s0zVRB2G6o9Lt-nuuE5AVjK5-Gs5rf4AnWecQH=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/A4Twi84fwv4yHQPbhaFnhy9PGO1rPU4zJ_s0zVRB2G6o9Lt-nuuE5AVjK5-Gs5rf4AnWecQH=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/A4Twi84fwv4yHQPbhaFnhy9PGO1rPU4zJ_s0zVRB2G6o9Lt-nuuE5AVjK5-Gs5rf4AnWecQH=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/A4Twi84fwv4yHQPbhaFnhy9PGO1rPU4zJ_s0zVRB2G6o9Lt-nuuE5AVjK5-Gs5rf4AnWecQH=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/A4Twi84fwv4yHQPbhaFnhy9PGO1rPU4zJ_s0zVRB2G6o9Lt-nuuE5AVjK5-Gs5rf4AnWecQH=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/Xx0um6DlY7Y/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/Xx0um6DlY7Y/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/Xx0um6DlY7Y/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/Xx0um6DlY7Y/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/Xx0um6DlY7Y/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/Xx0um6DlY7Y/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/Xx0um6DlY7Y/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/Xx0um6DlY7Y/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "Reach a summit never climbed before in this survival-climber from the creators of Furi and Haven. Climb anywhere and plan your route carefully, managing pitons and resources to survive unforgiving...",
            "descriptionHtml": "Reach a summit never climbed before in this survival-climber from the creators of Furi and Haven. Climb anywhere and plan your route carefully, managing pitons and resources to survive unforgiving...",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770547322,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "Nancy Guthrie News LIVE | We Will Pay: Daughter Savannah Ready To Pay Ransom For Nancy's Safe Return",
            "videoId": "x7ifpPMvuWQ",
            "author": "CNN-News18",
            "authorId": "UCef1-8eOpJgud7szVPlZQAQ",
            "authorUrl": "/channel/UCef1-8eOpJgud7szVPlZQAQ",
            "authorVerified": true,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/x7ifpPMvuWQ/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/x7ifpPMvuWQ/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/x7ifpPMvuWQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/x7ifpPMvuWQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/x7ifpPMvuWQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/x7ifpPMvuWQ/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/x7ifpPMvuWQ/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/x7ifpPMvuWQ/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "In a dramatic development, Savannah Guthrie has said she is prepared to pay a ransom to ensure the safe return of her mother, Nancy Guthrie, as concerns grow over her well-being. The statement...",
            "descriptionHtml": "In a dramatic development, Savannah Guthrie has said she is prepared to pay a ransom to ensure the safe return of her mother, Nancy Guthrie, as concerns grow over her well-being. The statement...",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770547322,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "DRX vs NS | 2026 LCK CUP Play-Ins",
            "videoId": "YqiBukU5VXc",
            "author": "LCK Global",
            "authorId": "UCKVlixycWmapnGQ_wht4cHQ",
            "authorUrl": "/channel/UCKVlixycWmapnGQ_wht4cHQ",
            "authorVerified": true,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/Lb58Dod66akkDriGmB6bYwE9iV0OwLYKsoEv7em8ZP9yrlKAYLvPepP_NyUDSNGUgFKLtVykmg=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/Lb58Dod66akkDriGmB6bYwE9iV0OwLYKsoEv7em8ZP9yrlKAYLvPepP_NyUDSNGUgFKLtVykmg=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/Lb58Dod66akkDriGmB6bYwE9iV0OwLYKsoEv7em8ZP9yrlKAYLvPepP_NyUDSNGUgFKLtVykmg=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/Lb58Dod66akkDriGmB6bYwE9iV0OwLYKsoEv7em8ZP9yrlKAYLvPepP_NyUDSNGUgFKLtVykmg=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/Lb58Dod66akkDriGmB6bYwE9iV0OwLYKsoEv7em8ZP9yrlKAYLvPepP_NyUDSNGUgFKLtVykmg=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/Lb58Dod66akkDriGmB6bYwE9iV0OwLYKsoEv7em8ZP9yrlKAYLvPepP_NyUDSNGUgFKLtVykmg=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/YqiBukU5VXc/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/YqiBukU5VXc/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/YqiBukU5VXc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/YqiBukU5VXc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/YqiBukU5VXc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/YqiBukU5VXc/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/YqiBukU5VXc/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/YqiBukU5VXc/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "#LCK #ForOneLegacy #2026LCKCUP\n\n✅ Watch LCK live on...\nENG - http://twitch.tv/LCK\nFRE - http://twitch.tv/otplol_\nVNM - http://youtube.com/LCKTiếngViệt\nVNM - https://streamer.onlive.vn/lcktien...",
            "descriptionHtml": "#LCK #ForOneLegacy #2026LCKCUP<br><br>✅ Watch LCK live on...<br>ENG - http://twitch.tv/LCK<br>FRE - http://twitch.tv/otplol_<br>VNM - http://youtube.com/LCKTiếngViệt<br>VNM - https://streamer.onlive.vn/lcktien...",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770547322,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "Nancy Guthrie Kidnapping LIVE | Savannah Guthrie's Mother Abducted From Her Home | INVESTIGATIONS",
            "videoId": "6HNLqA83CPI",
            "author": "CNN-News18",
            "authorId": "UCef1-8eOpJgud7szVPlZQAQ",
            "authorUrl": "/channel/UCef1-8eOpJgud7szVPlZQAQ",
            "authorVerified": true,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/6HNLqA83CPI/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/6HNLqA83CPI/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/6HNLqA83CPI/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/6HNLqA83CPI/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/6HNLqA83CPI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/6HNLqA83CPI/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/6HNLqA83CPI/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/6HNLqA83CPI/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "LIVE COVERAGE: Nancy Guthrie, mother of Today show co-host Savannah Guthrie, has been abducted from her home in Tucson, Arizona. Authorities have launched an urgent investigation into her disappear...",
            "descriptionHtml": "LIVE COVERAGE: Nancy Guthrie, mother of Today show co-host Savannah Guthrie, has been abducted from her home in Tucson, Arizona. Authorities have launched an urgent investigation into her disappear...",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770547322,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "FURIA vs. HERETICS - Six Invitational 2026 | Stream A | Playoffs - Day 6",
            "videoId": "hakkZfT2wBg",
            "author": "Rainbow Six Esports",
            "authorId": "UCWKHac5bjhsUtSnMDFCT-7A",
            "authorUrl": "/channel/UCWKHac5bjhsUtSnMDFCT-7A",
            "authorVerified": false,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/3NAPXHe53-UYSwAMVabrkwNUwLRGsE-Lj-Sp32cJxF1J_w-7Mbq3dBWf7cJywBeiYUsA4osFGz4=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/3NAPXHe53-UYSwAMVabrkwNUwLRGsE-Lj-Sp32cJxF1J_w-7Mbq3dBWf7cJywBeiYUsA4osFGz4=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/3NAPXHe53-UYSwAMVabrkwNUwLRGsE-Lj-Sp32cJxF1J_w-7Mbq3dBWf7cJywBeiYUsA4osFGz4=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/3NAPXHe53-UYSwAMVabrkwNUwLRGsE-Lj-Sp32cJxF1J_w-7Mbq3dBWf7cJywBeiYUsA4osFGz4=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/3NAPXHe53-UYSwAMVabrkwNUwLRGsE-Lj-Sp32cJxF1J_w-7Mbq3dBWf7cJywBeiYUsA4osFGz4=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/3NAPXHe53-UYSwAMVabrkwNUwLRGsE-Lj-Sp32cJxF1J_w-7Mbq3dBWf7cJywBeiYUsA4osFGz4=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/hakkZfT2wBg/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/hakkZfT2wBg/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/hakkZfT2wBg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/hakkZfT2wBg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/hakkZfT2wBg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/hakkZfT2wBg/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/hakkZfT2wBg/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/hakkZfT2wBg/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "The Six Invitational is the world championship of Rainbow Six Siege, where legacies are defined, dynasties are forged, and only the strongest teams earn a place in Siege history 🏆\n\n20 of...",
            "descriptionHtml": "The Six Invitational is the world championship of Rainbow Six Siege, where legacies are defined, dynasties are forged, and only the strongest teams earn a place in Siege history 🏆<br><br>20 of...",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770547322,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "LIVE 🔥 L.A. NIGHTCRAWLER NEWS CRIME & FIRE REPORT #NEWS #PRESS #MEDIA #LAPD #LAFD #LOSANGELES",
            "videoId": "2-pUIZGFWeg",
            "author": "AXN NEWS",
            "authorId": "UCypHkeDGdzItEPdXDNjJtUw",
            "authorUrl": "/channel/UCypHkeDGdzItEPdXDNjJtUw",
            "authorVerified": false,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/k7zyUQsiSvsnmOVv36bO6z0n-Jnw8iZSMpPP2pAQ8v4rjBy-SN1lqG2qq1fBu-oqJbGf2A9dsQ=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/k7zyUQsiSvsnmOVv36bO6z0n-Jnw8iZSMpPP2pAQ8v4rjBy-SN1lqG2qq1fBu-oqJbGf2A9dsQ=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/k7zyUQsiSvsnmOVv36bO6z0n-Jnw8iZSMpPP2pAQ8v4rjBy-SN1lqG2qq1fBu-oqJbGf2A9dsQ=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/k7zyUQsiSvsnmOVv36bO6z0n-Jnw8iZSMpPP2pAQ8v4rjBy-SN1lqG2qq1fBu-oqJbGf2A9dsQ=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/k7zyUQsiSvsnmOVv36bO6z0n-Jnw8iZSMpPP2pAQ8v4rjBy-SN1lqG2qq1fBu-oqJbGf2A9dsQ=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/k7zyUQsiSvsnmOVv36bO6z0n-Jnw8iZSMpPP2pAQ8v4rjBy-SN1lqG2qq1fBu-oqJbGf2A9dsQ=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/2-pUIZGFWeg/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/2-pUIZGFWeg/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/2-pUIZGFWeg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/2-pUIZGFWeg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/2-pUIZGFWeg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/2-pUIZGFWeg/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/2-pUIZGFWeg/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/2-pUIZGFWeg/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "@axnnewsla is a channel dedicated to bringing you the raw uncut news from Los Angeles, Ca. Show some support by hitting that subscribe button. Always on call for action. \n\nWe are only funded...",
            "descriptionHtml": "@axnnewsla is a channel dedicated to bringing you the raw uncut news from Los Angeles, Ca. Show some support by hitting that subscribe button. Always on call for action. <br><br>We are only funded...",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770547322,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "Best of Bob Ross: Weekend Marathon!",
            "videoId": "hmVGmGI7ufg",
            "author": "Bob Ross",
            "authorId": "UCxcnsr1R5Ge_fbTu5ajt8DQ",
            "authorUrl": "/channel/UCxcnsr1R5Ge_fbTu5ajt8DQ",
            "authorVerified": true,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/_JeSHmzSY045bgMXcxOIXTSdURg8BvhrlUFIXqcmbL5hZONejX8eOuoErMYdaerrXqkP1LasaQ=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/_JeSHmzSY045bgMXcxOIXTSdURg8BvhrlUFIXqcmbL5hZONejX8eOuoErMYdaerrXqkP1LasaQ=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/_JeSHmzSY045bgMXcxOIXTSdURg8BvhrlUFIXqcmbL5hZONejX8eOuoErMYdaerrXqkP1LasaQ=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/_JeSHmzSY045bgMXcxOIXTSdURg8BvhrlUFIXqcmbL5hZONejX8eOuoErMYdaerrXqkP1LasaQ=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/_JeSHmzSY045bgMXcxOIXTSdURg8BvhrlUFIXqcmbL5hZONejX8eOuoErMYdaerrXqkP1LasaQ=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/_JeSHmzSY045bgMXcxOIXTSdURg8BvhrlUFIXqcmbL5hZONejX8eOuoErMYdaerrXqkP1LasaQ=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/hmVGmGI7ufg/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/hmVGmGI7ufg/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/hmVGmGI7ufg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/hmVGmGI7ufg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/hmVGmGI7ufg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/hmVGmGI7ufg/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/hmVGmGI7ufg/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/hmVGmGI7ufg/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "Bob Ross weekend marathons begin every Friday at 11am ET.\n\nThis weekend, we're streaming our favorite episodes of The Joy of Painting with Bob Ross! What's your favorite episode? Let us know...",
            "descriptionHtml": "Bob Ross weekend marathons begin every Friday at 11am ET.<br><br>This weekend, we&#39;re streaming our favorite episodes of The Joy of Painting with Bob Ross! What&#39;s your favorite episode? Let us know...",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770547322,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        },
        {
            "type": "video",
            "title": "Epstein Files LIVE | Clintons Testify In Court | Released Document From Files Send Global Shockwaves",
            "videoId": "iIPj5uBw4i8",
            "author": "CNN-News18",
            "authorId": "UCef1-8eOpJgud7szVPlZQAQ",
            "authorUrl": "/channel/UCef1-8eOpJgud7szVPlZQAQ",
            "authorVerified": true,
            "authorThumbnails": [
                {
                    "url": "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s32-c-k-c0x00ffffff-no-rj",
                    "width": 32,
                    "height": 32
                },
                {
                    "url": "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s48-c-k-c0x00ffffff-no-rj",
                    "width": 48,
                    "height": 48
                },
                {
                    "url": "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s76-c-k-c0x00ffffff-no-rj",
                    "width": 76,
                    "height": 76
                },
                {
                    "url": "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s100-c-k-c0x00ffffff-no-rj",
                    "width": 100,
                    "height": 100
                },
                {
                    "url": "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s176-c-k-c0x00ffffff-no-rj",
                    "width": 176,
                    "height": 176
                },
                {
                    "url": "https://yt3.ggpht.com/SHQE0Y5rb996mAAUmkQZbJdSWj_rcce07GwKk4LTYkf9PKABaWtCEc_a6SjzZPqOgM8pP4kByXE=s512-c-k-c0x00ffffff-no-rj",
                    "width": 512,
                    "height": 512
                }
            ],
            "videoThumbnails": [
                {
                    "quality": "maxresdefault",
                    "url": "https://i.ytimg.com/vi/iIPj5uBw4i8/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                },
                {
                    "quality": "sddefault",
                    "url": "https://i.ytimg.com/vi/iIPj5uBw4i8/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                {
                    "quality": "high",
                    "url": "https://i.ytimg.com/vi/iIPj5uBw4i8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                {
                    "quality": "medium",
                    "url": "https://i.ytimg.com/vi/iIPj5uBw4i8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                {
                    "quality": "default",
                    "url": "https://i.ytimg.com/vi/iIPj5uBw4i8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "start",
                    "url": "https://i.ytimg.com/vi/iIPj5uBw4i8/1.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "middle",
                    "url": "https://i.ytimg.com/vi/iIPj5uBw4i8/2.jpg",
                    "width": 120,
                    "height": 90
                },
                {
                    "quality": "end",
                    "url": "https://i.ytimg.com/vi/iIPj5uBw4i8/3.jpg",
                    "width": 120,
                    "height": 90
                }
            ],
            "description": "The U.S. Department of Justice has released an unprecedented 3.5 million pages of Jeffrey Epstein files under the Epstein Files Transparency Act, exposing emails, court records, photos and...",
            "descriptionHtml": "The U.S. Department of Justice has released an unprecedented 3.5 million pages of Jeffrey Epstein files under the Epstein Files Transparency Act, exposing emails, court records, photos and...",
            "viewCount": 0,
            "viewCountText": "0 views",
            "published": 1770547322,
            "publishedText": "0 seconds ago",
            "lengthSeconds": 0,
            "liveNow": false,
            "premium": false,
            "isUpcoming": false,
            "isNew": false,
            "is4k": false,
            "is8k": false,
            "isVr180": false,
            "isVr360": false,
            "is3d": false,
            "hasCaptions": false
        }
    ]
}

const rootElement = document.getElementById("root");
const searchSuggestionContainerElement = document.getElementById("search-suggestions-container");
const searchInputEle = document.getElementById("search-text-input");

const showTrendingVideos = ()=>{
    const {list} = data;
    list.forEach((video)=>{
        const {author, title, publishedText, viewCountText, authorThumbnails, videoThumbnails} = video;
        const newdiv = document.createElement("div");
        newdiv.className = "video-card";
        newdiv.innerHTML = `
            <img src="${videoThumbnails[3].url}"></img>
        `
        
        const newdiv2 = document.createElement("div");
        newdiv2.className = "text-div";

        const childDiv1 = document.createElement("div");
        childDiv1.className = "child-div-1";
        const childDiv2 = document.createElement("div");
        childDiv2.className = "child-div-2";

        const authorDiv = document.createElement("div");
        authorDiv.className = "author-img";
        authorDiv.innerHTML = `
            <img src="${authorThumbnails[0].url}"></img>
        `

        const titleDiv = document.createElement("div");
        titleDiv.className = "video-title";
        titleDiv.innerHTML = `
            <p>${title}</p>
        `

        const bottomText = document.createElement("div");
        bottomText.className = "video-details";
        bottomText.innerHTML = `
            <p>${author}</p>
            <p>${viewCountText}</p>
            <p>${publishedText}</p>
        `

        childDiv1.appendChild(authorDiv);
        childDiv2.appendChild(titleDiv);
        childDiv2.appendChild(bottomText);
        newdiv2.appendChild(childDiv1);
        newdiv2.appendChild(childDiv2);

        newdiv.appendChild(newdiv2);
        rootElement.appendChild(newdiv);
    })
}

showTrendingVideos();

const handleAutoSuggest = (e) =>{
    const val = e.target.value;
    
    getSmartAutoSuggest(val);
}

document.querySelector('input[name="search-box"]').addEventListener('keyup', handleAutoSuggest);

const renderSuggestionList = (obj)=>{
    let {results} = obj;
    searchSuggestionContainerElement.innerHTML = "";
    if(!results || !results.length){
        searchSuggestionContainerElement.style.display="none";
        return;
    }

    results = results.slice(0,10);
    results.forEach((result)=>{
        const newText = document.createElement("p");
        newText.innerHTML = result;
        searchSuggestionContainerElement.appendChild(newText);
        searchSuggestionContainerElement.style.display="block";
        newText.addEventListener("click", (e)=>{
            searchInputEle.value = e.target.innerText;
            searchSuggestionContainerElement.innerHTML = "";
        })
    })
}

const sideBar = document.getElementById("hamburger-side-bar");
let sideBarOpen = false;
const handleHamburgerToggle = ()=>{
    sideBar.classList.toggle('is-open');
}

const hamburgerToggle = document.getElementById("hamburger-toggle");
hamburgerToggle.addEventListener("click", handleHamburgerToggle);
const sideBarToggle = document.getElementById("side-bar-toggle");
sideBarToggle.addEventListener("click", handleHamburgerToggle);

const handleSearch = ()=>{
    const val = searchInputEle.value;
    const encodedVal = encodeURIComponent(val);
    console.log(val);
    window.open(`/js/youtube/search/searchPage.html?searchText=${val}`, "_self");
}