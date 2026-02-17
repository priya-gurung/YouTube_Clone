const searchQuery = window.location.search;
const searchText = searchQuery.split("=").pop();

const getSearchResults = ()=>{
    // const request = fetch(`https://youtube138.p.rapidapi.com/search/?q=${searchText}&hl=en&gl=US`, {
    //     method: 'GET',
    //     headers: {
    //         "x-rapidapi-host":"youtube138.p.rapidapi.com",
    //         "x-rapidapi-key":"f3c68577a7msh344713c05e7dce5p11838fjsn88289acea70e"
    //     }
    // });

    const dummyData = {
    "contents": [
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/e_QQ17MwCDeYnoWhy8-8ffjPG8IuZHOaIJikIdi6eIw3RGxXPP4yQY9ZoeOz7j5OVfZmtdtHdnU=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@DryBarComedy",
                    "channelId": "UCvlVuntLjdURVD3b3Hx7kxw",
                    "title": "Dry Bar Comedy"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "This might be the best comedy special ever at least you might think so after watching this full special from John Novosad. In this ...",
                "isLiveNow": false,
                "lengthSeconds": 1541,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/ibVwBUNjgOE/mqdefault_6s.webp?du=3000&sqp=CIiqyswG&rs=AOn4CLD60tT_jExX4NxqB7JKD3Y8DdnhnA",
                        "width": 320
                    }
                ],
                "publishedTimeText": "1 year ago",
                "stats": {
                    "views": 3165196
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/ibVwBUNjgOE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAx7eU-0RjxhJzBByhryrS7OSA2DQ",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/ibVwBUNjgOE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeOAa2mhEs5gzWnnpopk7XshU3lw",
                        "width": 720
                    }
                ],
                "title": "This Might Be The Best Comedy Special Ever. John Novosad - Full Special",
                "videoId": "ibVwBUNjgOE"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/wlGfSbrjQeRSfnK0EF2WLb-Aqt7Yc9ueXDvijK7U_myokGD-u0vzPlRF3JcdL_Kc69ure7VVcQ=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@CrackedComedyClub",
                    "channelId": "UCeK0jhC7-Ot1bEaqvpr1Vaw",
                    "title": "Cracked Comedy Club"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "Love standup comedy? We've got 60 comedians and 60 standup bits that are pure comedy gold. All in 60 minutes or less.",
                "isLiveNow": false,
                "lengthSeconds": 3310,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/k6WNXMLTB5o/mqdefault_6s.webp?du=3000&sqp=CNSdyswG&rs=AOn4CLCcU732Xj9Y0kmfb18Ap5wXc1tzjw",
                        "width": 320
                    }
                ],
                "publishedTimeText": "5 months ago",
                "stats": {
                    "views": 329521
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/k6WNXMLTB5o/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjsVkikQAao18lqjW3dsuVi-5zuw",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/k6WNXMLTB5o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBpnw0E5Q3phzIaoJkiZpsTcmJSAw",
                        "width": 720
                    }
                ],
                "title": "60 Jokes That Are Pure Comedy Gold in 60 Minutes | Full Standup Comedy Compilation",
                "videoId": "k6WNXMLTB5o"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/IpiNonpcFPrOS_k3igzaOxvLimLQJvGW0n834iKNNaO2AQ3SpVC_dSwgtdzvC2BblVJTTkCt4uE=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@NateJackson",
                    "channelId": "UCstjsMVvSsV_kT0rworEidA",
                    "title": "Nate Jackson"
                },
                "badges": [],
                "descriptionSnippet": "January 2026 Crowd Work Joint This was filmed at The Laugh Factory in Hollywood, CA. My Netflix Special Is Out NOW!!! #FYP ...",
                "isLiveNow": false,
                "lengthSeconds": 2980,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/oCj-nuV7Sng/mqdefault_6s.webp?du=3000&sqp=CKiMyswG&rs=AOn4CLD0UAWWs5ZuigEg9yJb64Ge9LU0Vw",
                        "width": 320
                    }
                ],
                "publishedTimeText": "2 weeks ago",
                "stats": {
                    "views": 522621
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/oCj-nuV7Sng/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCV9dgmW6uiOK4RIg73ohBounAXcQ",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/oCj-nuV7Sng/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDScaAElvNVaH_IkleF7twUC0ML2w",
                        "width": 720
                    }
                ],
                "title": "NATE JACKSON January 2026 CROWD WORK JOINT: HOLLYWOOD EDITION",
                "videoId": "oCj-nuV7Sng"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/CVKck4WwTPccWLQPhBAKHfySifYPhWbEckHxR8npoRONSCISDPlYjtCxiHqENntt11Syne2JjWs=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [],
                    "canonicalBaseUrl": "/@Comedy_Stand_Up_Network",
                    "channelId": "UCNrN1jrDHKE4lCD-BKa9pog",
                    "title": "Comedy Stand Up Network!"
                },
                "badges": [],
                "descriptionSnippet": "crowdwork #ComedyStandup #Funny Welcome to Comedy Stand Up Network! This channel brings together the best full stand-up ...",
                "isLiveNow": false,
                "lengthSeconds": 3402,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/ZuaplvqNnnA/mqdefault_6s.webp?du=3000&sqp=CICWyswG&rs=AOn4CLAf1PhZOOOSL3p64X27DhJsXqys1w",
                        "width": 320
                    }
                ],
                "publishedTimeText": "1 month ago",
                "stats": {
                    "views": 343075
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/ZuaplvqNnnA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMgEELWWnRFWehJT7yq58phbt6yw",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/ZuaplvqNnnA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkmVKNojaMMunfuLaD-D44QgVFnA",
                        "width": 720
                    }
                ],
                "title": "Katt Williams Priceless Afterlife 2014 Full Show",
                "videoId": "ZuaplvqNnnA"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/ytc/AIdro_nrDHB9AFBjjGtC2bzQw_kT9Osh2Delwywov8NWtE5btQ=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@DontTellComedy",
                    "channelId": "UC7MgijK9WL_EqCo1juUERwg",
                    "title": "Don't Tell Comedy"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "Comedy is at its best when there's a surprise – that's why Don't Tell Comedy puts on events where the performers and location are ...",
                "isLiveNow": false,
                "lengthSeconds": 765,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/Vy96iuq94Ko/mqdefault_6s.webp?du=3000&sqp=CJqkyswG&rs=AOn4CLANJZCsKN3Ypf8HtylZrdFlBB0tMA",
                        "width": 320
                    }
                ],
                "publishedTimeText": "2 years ago",
                "stats": {
                    "views": 4282817
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/Vy96iuq94Ko/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBI-FWMRExqX6FfmNE7CV4bSYxiiA",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/Vy96iuq94Ko/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKN_ScKX01jRql1D_MFCRajnRkvQ",
                        "width": 720
                    }
                ],
                "title": "Woke Flat Earthers | Malik Elassal | Stand Up Comedy",
                "videoId": "Vy96iuq94Ko"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/e_QQ17MwCDeYnoWhy8-8ffjPG8IuZHOaIJikIdi6eIw3RGxXPP4yQY9ZoeOz7j5OVfZmtdtHdnU=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@DryBarComedy",
                    "channelId": "UCvlVuntLjdURVD3b3Hx7kxw",
                    "title": "Dry Bar Comedy"
                },
                "badges": [
                    "CC"
                ],
                "descriptionSnippet": "My mom doesn't think these jokes are funny, or at least thats what Shawn Felipe says in his first ever Dry Bar Comedy special. in ...",
                "isLiveNow": false,
                "lengthSeconds": 1250,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/elsfzFufbDE/mqdefault_6s.webp?du=3000&sqp=CJOoyswG&rs=AOn4CLA62s6tnlbvYpMVuobzBvkdA-Z48Q",
                        "width": 320
                    }
                ],
                "publishedTimeText": "6 months ago",
                "stats": {
                    "views": 913404
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/elsfzFufbDE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDelpfhpMRfhmegRo0hTN7UrYEjAA",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/elsfzFufbDE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcJ4WY7kZhneOEe9l7F3qjrLVBow",
                        "width": 720
                    }
                ],
                "title": "My Mom Doesn't Think These Jokes Are Funny. Shawn Felipe - Full Special",
                "videoId": "elsfzFufbDE"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/EEyeTSBPYXt7rSqDVpFhmWZWA1s6yxKunFtp3BghMwOjn8ktbG6x7KtDOxvrhbPDSUttifSzvg=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [],
                    "canonicalBaseUrl": "/@800pgSFW",
                    "channelId": "UCBZo4bO6K7JKnIv6HBWhkzg",
                    "title": "800 Pound Gorilla SFW Comedy"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "2 hours of comedy you can't walk away from. Enjoy! Comedians in order of appearance: 0:00:00 Chad Daniels - Twelfth Night ...",
                "isLiveNow": false,
                "lengthSeconds": 8666,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/OLGrx-m-0iA/mqdefault_6s.webp?du=3000&sqp=CNCOyswG&rs=AOn4CLBCmqFL10uOzmhGvIcBobfxnqOOhg",
                        "width": 320
                    }
                ],
                "publishedTimeText": "4 months ago",
                "stats": {
                    "views": 657981
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/OLGrx-m-0iA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7nVUHuStYsPxjL0DYL9YeP2LG6w",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/OLGrx-m-0iA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9pZUV7SeZ-L9xdCDVEK2zIyT4dw",
                        "width": 720
                    }
                ],
                "title": "2 Hours of All Killer Comedy | Stand-Up Comedy Compilation",
                "videoId": "OLGrx-m-0iA"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/agEqZ08wJnRBAYVFJuIlF5Qdp_MHK-hQHA37B8vPASilp_LhF2KkkG3ckhzWh83kLdQPgNWYnw=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@MaxAmini",
                    "channelId": "UCQTmZczX5kGRgaPIgpy6CyQ",
                    "title": "Max Amini"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "You've been randomly selected in my shows, now prepare to be Randomly Selected in your homes! Max Amini's comedy special ...",
                "isLiveNow": false,
                "lengthSeconds": 3000,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/Oy2QyPQ5L5M/mqdefault_6s.webp?du=3000&sqp=CJX1ycwG&rs=AOn4CLA5Tu-O_-2mUKpIzB6HF1IzY-B75A",
                        "width": 320
                    }
                ],
                "publishedTimeText": "1 year ago",
                "stats": {
                    "views": 17120866
                },
                "thumbnails": [
                    {
                        "height": 270,
                        "url": "https://i.ytimg.com/vi/Oy2QyPQ5L5M/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDeF0EU7s0NGc5x8OdyNxwDD9zvzg",
                        "width": 480
                    }
                ],
                "title": "Max Amini FULL COMEDY SPECIAL 2025 | \"Randomly Selected\" | Stand Up Comedy",
                "videoId": "Oy2QyPQ5L5M"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/-BJZM-v2CsXZY4-NFSLFN7bhIilo4YqTH2bgkXpWl9jFJK0Urlykjc3WrwImxMvXFUOEDTMb2j8=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@800pgm",
                    "channelId": "UCJ9hfZ2sU7jFT9isA2rN58Q",
                    "title": "800 Pound Gorilla Media"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "Over an hour and half of the best moments in comedy. Don't miss out on the hottest comedians in the game. Which bit is your ...",
                "isLiveNow": false,
                "lengthSeconds": 5893,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/UvANWG6cQi8/mqdefault_6s.webp?du=3000&sqp=CLnrycwG&rs=AOn4CLBsoYFj7dmdtXbL3ZVvaBzbhD0b4g",
                        "width": 320
                    }
                ],
                "publishedTimeText": "9 months ago",
                "stats": {
                    "views": 784976
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/UvANWG6cQi8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCl6Ce8n7JMg7pgvT2CZV-CC_FGKw",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/UvANWG6cQi8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCutYdUmt-Ri0SaWBHEibnwbn-mbA",
                        "width": 720
                    }
                ],
                "title": "Don't Miss Out On The Best Comedy | Stand-Up Comedy Compilation",
                "videoId": "UvANWG6cQi8"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/2gYF5Xk0BwfFqdJoPFubl8fQifSqOqMR4zU1IbLq6wSeh9OCvr5Fmtwqj_SS-udegDG_QQk_5iY=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [],
                    "canonicalBaseUrl": "/@800pgmslices",
                    "channelId": "UCv4BtTHeqclK5jWEnnGjT2Q",
                    "title": "800 Pound Gorilla Comedy Slices"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "In these 47 minutes with Matt Rife he talks to his audience about a variety of topics ranging from being gay to ghosts. Watch now.",
                "isLiveNow": false,
                "lengthSeconds": 2827,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/txN_qF7Sk6k/mqdefault_6s.webp?du=3000&sqp=CKKnyswG&rs=AOn4CLBpA3QUNd2ajC9zW71KnaCho6zL_g",
                        "width": 320
                    }
                ],
                "publishedTimeText": "5 months ago",
                "stats": {
                    "views": 2222137
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/txN_qF7Sk6k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAmLmuo1C2TL96FLqn18HC0J-EXtA",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/txN_qF7Sk6k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7WgW9UHgBX73utgAsv09Lz4NMpg",
                        "width": 720
                    }
                ],
                "title": "Unfiltered Matt Rife Comedy | Matt Rife Viral Crowd Work Moments",
                "videoId": "txN_qF7Sk6k"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/EEyeTSBPYXt7rSqDVpFhmWZWA1s6yxKunFtp3BghMwOjn8ktbG6x7KtDOxvrhbPDSUttifSzvg=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [],
                    "canonicalBaseUrl": "/@800pgSFW",
                    "channelId": "UCBZo4bO6K7JKnIv6HBWhkzg",
                    "title": "800 Pound Gorilla SFW Comedy"
                },
                "badges": [],
                "descriptionSnippet": "Get ready to meet your next favorite comedians at “Comedians You Need to Know”! This lively showcase brings together a stellar ...",
                "isLiveNow": false,
                "lengthSeconds": 6177,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/52n6-PGdvII/mqdefault_6s.webp?du=3000&sqp=COSRyswG&rs=AOn4CLD4_Mh8-RQJp5lg988j2tcgsMU9WQ",
                        "width": 320
                    }
                ],
                "publishedTimeText": "3 months ago",
                "stats": {
                    "views": 108395
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/52n6-PGdvII/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeqNaN4_r0dx3UONxgpnXs4psj7Q",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/52n6-PGdvII/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMrdIJmhP-EJ8ZtUig2DkT_suX5w",
                        "width": 720
                    }
                ],
                "title": "Comedians You Need To Know | Comedy Showcase (Full Comedy Special)",
                "videoId": "52n6-PGdvII"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/iCj_kK3ZBq8i0V2wHWo4_Bpw3k5kwqydofpzegChtu7Wn-g1PpNPU0nDAQ7Bac08HJsISJ5QfQ=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [],
                    "canonicalBaseUrl": "/@AliSiddiqComedy",
                    "channelId": "UCp1m5biWDhP6ogRCpD-qKpw",
                    "title": "Ali Siddiq and Marcus D. Wiley"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "Ali Siddiq presents Marcus D. Wiley: REHAB, the powerful new full stand-up comedy special focused on fixing marriages, ...",
                "isLiveNow": false,
                "lengthSeconds": 3796,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/I4qDOF3RbCw/mqdefault_6s.webp?du=3000&sqp=CNCMyswG&rs=AOn4CLDlxrYlbfvfiZRGg8NAJoz_-lSv4A",
                        "width": 320
                    }
                ],
                "publishedTimeText": "2 weeks ago",
                "stats": {
                    "views": 716704
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/I4qDOF3RbCw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvgdrz7No1HUdh75K-r0PrgqjV8Q",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/I4qDOF3RbCw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAcPek1d_SOhvgZ4EDx1o7kAy5usw",
                        "width": 720
                    }
                ],
                "title": "Ali Siddiq presents Marcus D. Wiley: REHAB  {FULL COMEDY SPECIAL}",
                "videoId": "I4qDOF3RbCw"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/wlGfSbrjQeRSfnK0EF2WLb-Aqt7Yc9ueXDvijK7U_myokGD-u0vzPlRF3JcdL_Kc69ure7VVcQ=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@CrackedComedyClub",
                    "channelId": "UCeK0jhC7-Ot1bEaqvpr1Vaw",
                    "title": "Cracked Comedy Club"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "Heading into Spring, we put together a compilation of the best full stand up sets from the Cracked Comedy Club Winter 2025.",
                "isLiveNow": false,
                "lengthSeconds": 5964,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/CQHk6YVUSNs/mqdefault_6s.webp?du=3000&sqp=CIOZyswG&rs=AOn4CLAgpDp4zOKyd19_05qbTdWZ_F9xdA",
                        "width": 320
                    }
                ],
                "publishedTimeText": "10 months ago",
                "stats": {
                    "views": 763061
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/CQHk6YVUSNs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCoLS_abPPxdEOPQGmu5UuT4CMZng",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/CQHk6YVUSNs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDAdS3DjwsdwYbf1EmxcJmYst_4Hg",
                        "width": 720
                    }
                ],
                "title": "Best Standup Sets of Winter 2025 Compilation | Standup Comedy | Cracked Comedy Club",
                "videoId": "CQHk6YVUSNs"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/ytc/AIdro_mfaAS1xHRTGNzntMpumlMyti0L1BT3zkhZl_JatCqglWw=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@MYFAMILYComedy",
                    "channelId": "UC4B6dDVB0Umrh5l4UgxUtyg",
                    "title": "MY FAMILY"
                },
                "badges": [
                    "New",
                    "4K"
                ],
                "descriptionSnippet": "funny #comedy #fun #funnyvideo Must Watch Top New Funniest Comedy Video, Must Watch Viral Funny Video 2026 Episode ...",
                "isLiveNow": false,
                "lengthSeconds": 503,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/-wATZ39-_rs/mqdefault_6s.webp?du=3000&sqp=CNKeyswG&rs=AOn4CLBQ5Xeuv5M9fStHptkBxhV5h58h1g",
                        "width": 320
                    }
                ],
                "publishedTimeText": "21 hours ago",
                "stats": {
                    "views": 66177
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/-wATZ39-_rs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDo_t0y6LTK1WCh-8Tid17cOKVzBg",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/-wATZ39-_rs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAE7YgksnaP7W_SqnCPfBb8reZNuA",
                        "width": 720
                    }
                ],
                "title": "Must Watch Top New Funniest Comedy Video, Must Watch Viral Funny Video 2026 Episode 418 By my family",
                "videoId": "-wATZ39-_rs"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/ytc/AIdro_nrDHB9AFBjjGtC2bzQw_kT9Osh2Delwywov8NWtE5btQ=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@DontTellComedy",
                    "channelId": "UC7MgijK9WL_EqCo1juUERwg",
                    "title": "Don't Tell Comedy"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "Comedian Josh Adams on absurd news stories, riffs with a heckler, and the only rival to a strong independent woman Comedy is ...",
                "isLiveNow": false,
                "lengthSeconds": 656,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/wNYgupoiyWs/mqdefault_6s.webp?du=3000&sqp=CIClyswG&rs=AOn4CLAb2DhN7CHbufCqskND59m8EkaaRA",
                        "width": 320
                    }
                ],
                "publishedTimeText": "5 months ago",
                "stats": {
                    "views": 505177
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/wNYgupoiyWs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7KftCyllXqkAURHY1X3vbgiFeXA",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/wNYgupoiyWs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDV96F0RR3WwbGhYUy8Sobd_sGpSQ",
                        "width": 720
                    }
                ],
                "title": "\"I Just Realized I'm Racist\" | Josh Adams | Stand Up Comedy",
                "videoId": "wNYgupoiyWs"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/jOJD-jErZ5WPkuMeP_UG9Ga0PmiVkEgjpaVTzjc53v5m3rBn_zu1BiLm7SgZ7v19oOb7gqLW7-8=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@ChocolateSundaes",
                    "channelId": "UCv8G-xZ_BBGufjbN6jbvLMQ",
                    "title": "Chocolate Sundaes Comedy"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "The more that is revealed, the worse it gets. Follow @comediantreyelliot on social media @comediantreyelliot Filmed 12/28/25 ...",
                "isLiveNow": false,
                "lengthSeconds": 681,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/FWx_NVY7PDM/mqdefault_6s.webp?du=3000&sqp=CPSnyswG&rs=AOn4CLAxO9O6e8DVRmRXIVWduIKSochRtw",
                        "width": 320
                    }
                ],
                "publishedTimeText": "10 days ago",
                "stats": {
                    "views": 53030
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/FWx_NVY7PDM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCu3U5umvmyHxoHiuy8Yn6ew4b_1A",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/FWx_NVY7PDM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1hRT6ue0rQ9TzMXzEyA025WScXw",
                        "width": 720
                    }
                ],
                "title": "The Epstein Files Prove White Privilege - Comedian Trey Elliot - Chocolate Sundaes Stand Up Comedy",
                "videoId": "FWx_NVY7PDM"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/tWc9LHQEvQwSJLnHtMIr8XM7kFRSeMjWu4hA6yES9dR2aWRrgnpC0TQ7TdQsGDgW8V6C9cdLJA=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@NonstopComedy05",
                    "channelId": "UC9pK7shVDkHkBeRiXpzXbcQ",
                    "title": "Bindas Fun Nonstop"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "Disclaimer... This video is only designed for entertainment all its characters and events are fictitious. Watch the video just for fun.",
                "isLiveNow": false,
                "lengthSeconds": 308,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/PXC2igw2dEQ/mqdefault_6s.webp?du=3000&sqp=CMihyswG&rs=AOn4CLDlR2GWBa8s8bagy4kw_w8nMVhYIQ",
                        "width": 320
                    }
                ],
                "publishedTimeText": "1 day ago",
                "stats": {
                    "views": 351805
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/PXC2igw2dEQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAr-UD6EKM05CQ9PLV1mE40oJqGGw",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/PXC2igw2dEQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCenAv66itdPUPUsygu-rum8aZ13w",
                        "width": 720
                    }
                ],
                "title": "DOODH CHOR || Latest New Funny Comedy Video || Bindas Fun Nonstop",
                "videoId": "PXC2igw2dEQ"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/ZS8W-Cw0ncLlo5zFHVqPTRIYJvhqRIGXNZwRDYJsHJSHZ8cKvjDywmL-UhVWaxpjCVkfR2CX2XI=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@ourfuntv0",
                    "channelId": "UCMuz3501Iy7n-yPIFi1KldQ",
                    "title": "Our Fun Tv"
                },
                "badges": [],
                "descriptionSnippet": "ourfuntv #comedy #comedyvideo #comedyshorts #funny #funnyvideo #funnyshorts #tuituifunny #hasirvideo # Funniest Fun New ...",
                "isLiveNow": false,
                "lengthSeconds": 524,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/W2MT-V8LxkI/mqdefault_6s.webp?du=3000&sqp=CNTwycwG&rs=AOn4CLB7neZPmb2fL0BQirKTditEpVQDlg",
                        "width": 320
                    }
                ],
                "publishedTimeText": "4 months ago",
                "stats": {
                    "views": 73692658
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/W2MT-V8LxkI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcnjLTi0fisVhUT2_Dec2npzM7zQ",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/W2MT-V8LxkI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDg4GOmcOz7l25fqlSALIMI-gbOKA",
                        "width": 720
                    }
                ],
                "title": "Funniest Fun New Comedy Video 2025 😂 amazing best of funny video Episode 232 By Our Fun Tv",
                "videoId": "W2MT-V8LxkI"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/tWc9LHQEvQwSJLnHtMIr8XM7kFRSeMjWu4hA6yES9dR2aWRrgnpC0TQ7TdQsGDgW8V6C9cdLJA=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@NonstopComedy05",
                    "channelId": "UC9pK7shVDkHkBeRiXpzXbcQ",
                    "title": "Bindas Fun Nonstop"
                },
                "badges": [
                    "New"
                ],
                "descriptionSnippet": "If we have any mistake. Please comment and tell us, what is our mistake? We well try to solve this mistake next. Please watch our ...",
                "isLiveNow": false,
                "lengthSeconds": 332,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/_KjAagM9_Gg/mqdefault_6s.webp?du=3000&sqp=CLiPyswG&rs=AOn4CLD-jmAtYEAi08pIYLV7TG7LJ-DNxg",
                        "width": 320
                    }
                ],
                "publishedTimeText": "4 days ago",
                "stats": {
                    "views": 325683
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/_KjAagM9_Gg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQXe3_zosviaLsnYQrsROKMtzzNg",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/_KjAagM9_Gg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3kDrRgYt5kJiItNsvtZD8drqS8g",
                        "width": 720
                    }
                ],
                "title": "ZIDDI CANDY WALA vs  SHAITAN BACHHA || Must Watch New Comedy Story 2026 || Bindas Fun Nonstop",
                "videoId": "_KjAagM9_Gg"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/ytc/AIdro_mfaAS1xHRTGNzntMpumlMyti0L1BT3zkhZl_JatCqglWw=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@MYFAMILYComedy",
                    "channelId": "UC4B6dDVB0Umrh5l4UgxUtyg",
                    "title": "MY FAMILY"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "funny #comedy #fun #funnyvideo Must Watch Top New Funniest Comedy Video, Must Watch Viral Funny Video 2025 Episode ...",
                "isLiveNow": false,
                "lengthSeconds": 523,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/IlO2vvpA1DE/mqdefault_6s.webp?du=3000&sqp=CMmhyswG&rs=AOn4CLA0AtuS0uSCIF19z0iYxZYMujE8Hg",
                        "width": 320
                    }
                ],
                "publishedTimeText": "5 months ago",
                "stats": {
                    "views": 24116711
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/IlO2vvpA1DE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhz05qrs6kQ8sGtLUXJ6y3Z3Vnmw",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/IlO2vvpA1DE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnUZYie6wvvv8y1tLc24LbWmCbwQ",
                        "width": 720
                    }
                ],
                "title": "Must Watch Top New Funniest Comedy Video, Must Watch Viral Funny Video 2025 Episode 418 By my family",
                "videoId": "IlO2vvpA1DE"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/9zmDuSvvllla4Lea7-QF4zXvSwM2Vw2NIcXZdHmRyHNrL_aH1djDXDhUwotqCk9DUmsbnG03lw=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@beabassi",
                    "channelId": "UC2S0KiGusFDXWcxwEorulsA",
                    "title": "be_a_bassi"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "Hanji, meri shaandar team ki ek aur peshkesh dekhlo jo inhone ek saal laga diya edit karne mei, Jab ab wapas Canada tour ...",
                "isLiveNow": false,
                "lengthSeconds": 678,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/XbiObxjyAkE/mqdefault_6s.webp?du=3000&sqp=CLftycwG&rs=AOn4CLAcx0UU5QBV7wGjLjonpyMGHbhbtA",
                        "width": 320
                    }
                ],
                "publishedTimeText": "1 month ago",
                "stats": {
                    "views": 5210624
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/XbiObxjyAkE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsPLdDElQ8nhosKSh1XQWmmZmyIA",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/XbiObxjyAkE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7v5WByhhoGxlixO-dxNJEQHamag",
                        "width": 720
                    }
                ],
                "title": "Bassi in USA & Canada | Stand Up Comedy | Ft  @AnubhavSinghBassi",
                "videoId": "XbiObxjyAkE"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/zdFgKyECcZX5vZ3DixThIBuXWF44BcaVd5UndmG1XcLo5TzkKQAENEcVm68CKSy0pM2rEy6MFw=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@funtv22",
                    "channelId": "UC8bRoTup4RoG9LqgK82gDlg",
                    "title": "Fun Tv 22"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "busyfunltd #injection_wala #injectionfunnyvideo Very Special Trending Funny Comedy Video 2025 Amazing Injection Wala ...",
                "isLiveNow": false,
                "lengthSeconds": 503,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/G-RmbWHqUdk/mqdefault_6s.webp?du=3000&sqp=CIeLyswG&rs=AOn4CLBfbyGDIVHZ8PXimCXFfCaSFzptvw",
                        "width": 320
                    }
                ],
                "publishedTimeText": "4 months ago",
                "stats": {
                    "views": 28836221
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/G-RmbWHqUdk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDu5O3nrn1IO5pDduhxO2tOjM4hUA",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/G-RmbWHqUdk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDq_RBGHBP3Z6-v9gWw3Mxlm7AepA",
                        "width": 720
                    }
                ],
                "title": "Very Special Trending Funny Comedy Video 2025 Amazing Injection Wala Doctor Comedy Video Epi-170",
                "videoId": "G-RmbWHqUdk"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/ZS8W-Cw0ncLlo5zFHVqPTRIYJvhqRIGXNZwRDYJsHJSHZ8cKvjDywmL-UhVWaxpjCVkfR2CX2XI=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@ourfuntv0",
                    "channelId": "UCMuz3501Iy7n-yPIFi1KldQ",
                    "title": "Our Fun Tv"
                },
                "badges": [],
                "descriptionSnippet": "ourfuntv #comedy #comedyvideo #comedyshorts #funny #funnyvideo #funnyshorts #tuituifunny #hasirvideo # Hello viewers ...",
                "isLiveNow": false,
                "lengthSeconds": 562,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/WKqnQJL_PPw/mqdefault_6s.webp?du=3000&sqp=CPyTyswG&rs=AOn4CLDM4Fm7dD_YjUE0AXBuPVYVXHJ-Eg",
                        "width": 320
                    }
                ],
                "publishedTimeText": "2 months ago",
                "stats": {
                    "views": 5336180
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/WKqnQJL_PPw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQQWdbyiiznP1iyoGZ5y0pSePl3A",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/WKqnQJL_PPw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCaXyRPNGyDdzEFTdYhiPjWMw6KoQ",
                        "width": 720
                    }
                ],
                "title": "Funniest Comedy Video Ever Amazing Funny Video 😂 Try To Not Laugh 2025 Episode 246 By Our Fun Tv",
                "videoId": "WKqnQJL_PPw"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/jOJD-jErZ5WPkuMeP_UG9Ga0PmiVkEgjpaVTzjc53v5m3rBn_zu1BiLm7SgZ7v19oOb7gqLW7-8=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@ChocolateSundaes",
                    "channelId": "UCv8G-xZ_BBGufjbN6jbvLMQ",
                    "title": "Chocolate Sundaes Comedy"
                },
                "badges": [],
                "descriptionSnippet": "Follow @RyanDavisComedy on social media @ryandaviscomedy Filmed 9/1/24 Join our channel to get access to perks: ...",
                "isLiveNow": false,
                "lengthSeconds": 824,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/_XRcAdoEKCQ/mqdefault_6s.webp?du=3000&sqp=CPiEyswG&rs=AOn4CLCJ-LF3uSatauIlu-5U8LNpQatJ9g",
                        "width": 320
                    }
                ],
                "publishedTimeText": "2 months ago",
                "stats": {
                    "views": 927002
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/_XRcAdoEKCQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0BlNWqc775PZaS6rIPe_-Ke7_7w",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/_XRcAdoEKCQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2TheHvRvJjnB6yPmhlv2mOK9XYQ",
                        "width": 720
                    }
                ],
                "title": "Women Are Delusional AF! - Comedian Ryan Davis - Chocolate Sundaes Stand Up Comedy",
                "videoId": "_XRcAdoEKCQ"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/e_QQ17MwCDeYnoWhy8-8ffjPG8IuZHOaIJikIdi6eIw3RGxXPP4yQY9ZoeOz7j5OVfZmtdtHdnU=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@DryBarComedy",
                    "channelId": "UCvlVuntLjdURVD3b3Hx7kxw",
                    "title": "Dry Bar Comedy"
                },
                "badges": [],
                "descriptionSnippet": "Check out the top 10 Dry Bar Comedy clips of the year! Watch hundreds of Dry Bar Comedy specials on the Angel Studios App!",
                "isLiveNow": false,
                "lengthSeconds": 5170,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/03Li8-aokZs/mqdefault_6s.webp?du=3000&sqp=CPeMyswG&rs=AOn4CLDnBUYUzdVjYgLrys5ta3MZO52-8A",
                        "width": 320
                    }
                ],
                "publishedTimeText": "1 month ago",
                "stats": {
                    "views": 99432
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/03Li8-aokZs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDop2Wux1puGiv-aL62AyxUy3RNlg",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/03Li8-aokZs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCETGzf-jgFKKg2cOUREOCDAkSyQ",
                        "width": 720
                    }
                ],
                "title": "Top 10 Dry Bar Comedy Clips Of 2025",
                "videoId": "03Li8-aokZs"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/EEyeTSBPYXt7rSqDVpFhmWZWA1s6yxKunFtp3BghMwOjn8ktbG6x7KtDOxvrhbPDSUttifSzvg=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [],
                    "canonicalBaseUrl": "/@800pgSFW",
                    "channelId": "UCBZo4bO6K7JKnIv6HBWhkzg",
                    "title": "800 Pound Gorilla SFW Comedy"
                },
                "badges": [],
                "descriptionSnippet": "Enjoy 2 hours of the best comedy! Comedians in order of appearance: 00:00 Chad Daniels - Dad Chaniels 00:59 Ian Karmel ...",
                "isLiveNow": false,
                "lengthSeconds": 7262,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/_PLqE0jlEWU/mqdefault_6s.webp?du=3000&sqp=CKv2ycwG&rs=AOn4CLB110Mi57L3_C3khjQkS8p65XSybw",
                        "width": 320
                    }
                ],
                "publishedTimeText": "5 months ago",
                "stats": {
                    "views": 423156
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/_PLqE0jlEWU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOgjXh1r0f_cjOgCvvL8ONmn2KGw",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/_PLqE0jlEWU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBiJ90lRlwL2qDIR-zItR4_m3JLLA",
                        "width": 720
                    }
                ],
                "title": "2 Hours of the Best Non-Stop Comedy | Stand-Up Comedy Compilation",
                "videoId": "_PLqE0jlEWU"
            }
        },
        {
            "channel": {
                "avatar": [
                    {
                        "height": 88,
                        "url": "https://yt3.ggpht.com/e_QQ17MwCDeYnoWhy8-8ffjPG8IuZHOaIJikIdi6eIw3RGxXPP4yQY9ZoeOz7j5OVfZmtdtHdnU=s88-c-k-c0x00ffffff-no-rj-mo",
                        "width": 88
                    },
                    {
                        "height": 176,
                        "url": "https://yt3.ggpht.com/e_QQ17MwCDeYnoWhy8-8ffjPG8IuZHOaIJikIdi6eIw3RGxXPP4yQY9ZoeOz7j5OVfZmtdtHdnU=s176-c-k-c0x00ffffff-no-rj-mo",
                        "width": 176
                    }
                ],
                "badges": [
                    {
                        "text": "Verified",
                        "type": "VERIFIED_CHANNEL"
                    }
                ],
                "canonicalBaseUrl": "/@DryBarComedy",
                "channelId": "UCvlVuntLjdURVD3b3Hx7kxw",
                "descriptionSnippet": "An Angel Original | Funny for Everyone Stand up comedy for everyone in the family.",
                "stats": {
                    "subscribers": 3030000,
                    "subscribersText": "3.03M subscribers"
                },
                "title": "Dry Bar Comedy",
                "username": "@DryBarComedy"
            },
            "type": "channel"
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/wlGfSbrjQeRSfnK0EF2WLb-Aqt7Yc9ueXDvijK7U_myokGD-u0vzPlRF3JcdL_Kc69ure7VVcQ=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@CrackedComedyClub",
                    "channelId": "UCeK0jhC7-Ot1bEaqvpr1Vaw",
                    "title": "Cracked Comedy Club"
                },
                "badges": [
                    "4K"
                ],
                "descriptionSnippet": "Love comedy? Looking for the best standup comedians on the internet? We're bringing you a compilation of the comedy specials ...",
                "isLiveNow": false,
                "lengthSeconds": 7651,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/tEagtbiRRgk/mqdefault_6s.webp?du=3000&sqp=CJaOyswG&rs=AOn4CLCkYyzEWEqNV-brCuPZ8FZOMFRPMA",
                        "width": 320
                    }
                ],
                "publishedTimeText": "7 months ago",
                "stats": {
                    "views": 436596
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/tEagtbiRRgk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGnTSCeRCA8RJv0dleF8kUw92Yaw",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/tEagtbiRRgk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAaAcwvLwzvbh6ehpWWkCxo4OBoqw",
                        "width": 720
                    }
                ],
                "title": "Best Stand Up Comedy Sets Of Spring 2025 Compilation | Standup Comedy Full Special",
                "videoId": "tEagtbiRRgk"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/IpiNonpcFPrOS_k3igzaOxvLimLQJvGW0n834iKNNaO2AQ3SpVC_dSwgtdzvC2BblVJTTkCt4uE=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@NateJackson",
                    "channelId": "UCstjsMVvSsV_kT0rworEidA",
                    "title": "Nate Jackson"
                },
                "badges": [],
                "descriptionSnippet": "All of this crowd work is from my show my club in Tacoma, WA on Dec 28, 2005 My Netflix Special Is Out NOW!!! #FYP #Comedy ...",
                "isLiveNow": false,
                "lengthSeconds": 2345,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/yJByNBLJ0DY/mqdefault_6s.webp?du=3000&sqp=CMjpycwG&rs=AOn4CLCH0ykXH6aH76WTBhWnb8ofi3tuWw",
                        "width": 320
                    }
                ],
                "publishedTimeText": "3 weeks ago",
                "stats": {
                    "views": 296475
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/yJByNBLJ0DY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCacwa6BuBaJqN0ByIi7JrLz1k8g",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/yJByNBLJ0DY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgPdpE8U1UhXTQj7okgGT89A5nDQ",
                        "width": 720
                    }
                ],
                "title": "Crowd Work Pack: Super Funny Comedy Club",
                "videoId": "yJByNBLJ0DY"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/ytc/AIdro_mW4AQ4oAQoCFbvgCI9cgTrbji8tlC7lK4r608XajBoug=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@tfcmaacinemalu",
                    "channelId": "UCa197ScPLzoax3UylQAly1A",
                    "title": "Maa Cinemalu"
                },
                "badges": [],
                "descriptionSnippet": "TeluguMovieScenes #Latesttelugumovies Keep Following us for more Interesting Videos... CLICK HERE TO WATCH ...",
                "isLiveNow": false,
                "lengthSeconds": 7033,
                "movingThumbnails": [
                    {
                        "height": 180,
                        "url": "https://i.ytimg.com/an_webp/MTjjOdnWF5Y/mqdefault_6s.webp?du=3000&sqp=CLKqyswG&rs=AOn4CLDvGNXWXZmYxqgqwBKE0ZFDQRz-zA",
                        "width": 320
                    }
                ],
                "publishedTimeText": "3 months ago",
                "stats": {
                    "views": 2800576
                },
                "thumbnails": [
                    {
                        "height": 202,
                        "url": "https://i.ytimg.com/vi/MTjjOdnWF5Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwmS6BNlFTpRU8EQEKJXJoBpLXkA",
                        "width": 360
                    },
                    {
                        "height": 404,
                        "url": "https://i.ytimg.com/vi/MTjjOdnWF5Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCraSxlLoYC2GhOJL4ZBtu1FJT3gQ",
                        "width": 720
                    }
                ],
                "title": "Samajavaragamana Comedy Drama Telugu Full Film | Reba Monica John | Sree Vishnu @tfcmaacinemalu",
                "videoId": "MTjjOdnWF5Y"
            }
        }
    ],
    "cursorNext": "Eq0DEgZjb21lZHkaogNTQlNDQVF0cFlsWjNRbFZPYW1kUFJZSUJDMnMyVjA1WVRVeFVRalZ2Z2dFTGIwTnFMVzUxVmpkVGJtZUNBUXRhZFdGd2JIWnhUbTV1UVlJQkMxWjVPVFpwZFhFNU5FdHZnZ0VMWld4elpucEdkV1ppUkVXQ0FRdFBURWR5ZUMxdExUQnBRWUlCQzA5NU1sRjVVRkUxVERWTmdnRUxWWFpCVGxkSE5tTlJhVGlDQVF0MGVFNWZjVVkzVTJzMmE0SUJDelV5YmpZdFVFZGtka2xKZ2dFTFNUUnhSRTlHTTFKaVEzZUNBUXREVVVock5sbFdWVk5PYzRJQkMxOVlVbU5CWkc5RlMwTlJnZ0VMTUROTWFUZ3RZVzlyV25PQ0FRdGZVRXh4UlRCcWJFVlhWWUlCR0ZWRGRteFdkVzUwVEdwa1ZWSldSRE5pTTBoNE4ydDRkNElCQzNSRllXZDBZbWxTVW1kcmdnRUxlVXBDZVU1Q1RFb3dSRm1DQVF0TlZHcHFUMlJ1VjBZMVdiSUJCZ29FQ0JjUUF1b0JCQWdDRUE4JTNEGIHg6BgiC3NlYXJjaC1mZWVk",
    "didYouMean": null,
    "estimatedResults": 1986299976,
    "filterGroups": [
        {
            "filters": [
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJUUFRJTNEJTNE",
                    "label": "Videos",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJUUNRJTNEJTNE",
                    "label": "Shorts",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJUUFnJTNEJTNE",
                    "label": "Channels",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJUUF3JTNEJTNE",
                    "label": "Playlists",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJUUJBJTNEJTNE",
                    "label": "Movies",
                    "selected": false
                }
            ],
            "title": "Type"
        },
        {
            "filters": [
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJWUJBJTNEJTNE",
                    "label": "Under 3 minutes",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJWUJRJTNEJTNE",
                    "label": "3 - 20 minutes",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJWUFnJTNEJTNE",
                    "label": "Over 20 minutes",
                    "selected": false
                }
            ],
            "title": "Duration"
        },
        {
            "filters": [
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJSUFnJTNEJTNE",
                    "label": "Today",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJSUF3JTNEJTNE",
                    "label": "This week",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJSUJBJTNEJTNE",
                    "label": "This month",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJSUJRJTNEJTNE",
                    "label": "This year",
                    "selected": false
                }
            ],
            "title": "Upload date"
        },
        {
            "filters": [
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdKQUFRJTNEJTNE",
                    "label": "Live",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdKd0FRJTNEJTNE",
                    "label": "4K",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJZ0FRJTNEJTNE",
                    "label": "HD",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJb0FRJTNEJTNE",
                    "label": "Subtitles/CC",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJd0FRJTNEJTNE",
                    "label": "Creative Commons",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdKNEFRJTNEJTNE",
                    "label": "360°",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdQUUFRRSUzRA==",
                    "label": "VR180",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdJNEFRJTNEJTNE",
                    "label": "3D",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdQSUFRRSUzRA==",
                    "label": "HDR",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdPNEFRRSUzRA==",
                    "label": "Location",
                    "selected": false
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmRWdKSUFRJTNEJTNE",
                    "label": "Purchased",
                    "selected": false
                }
            ],
            "title": "Features"
        },
        {
            "filters": [
                {
                    "cursorSelect": null,
                    "label": "Relevance",
                    "selected": true
                },
                {
                    "cursorSelect": "Y29tZWR5JiYmQ0FNJTNE",
                    "label": "Popularity",
                    "selected": false
                }
            ],
            "title": "Prioritize"
        }
    ],
    "refinements": []
}

    // request.then((res)=>{
    //     res.json().then((res)=>{
            renderSearchResults(dummyData);
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    // }).catch((err)=>{
    //     console.log(err);
    // })
}

const rootElement = document.getElementById("search-card-container");
const renderSearchResults = (data)=>{    
    const {contents} = data;
    contents.forEach((obj)=>{
        console.log(obj);
        const {video} = obj;
        const {thumbnails, title, descriptionSnippet, publishedTimeText, stats} = video;

        const newDiv = document.createElement('div');
        newDiv.className = "search-result-video-card";

        newDiv.innerHTML = `
            <div class="thumbnail-container">
                <img src='${thumbnails.pop().url}' width = '100%'>
            </div>
            <div class="video-data-container">
                <h3>${title}</h3>
                <p><span>${stats.views}</span><span>${publishedTimeText}</span></p>
                <p>${descriptionSnippet}</p>
            </div>
        `

        rootElement.appendChild(newDiv);
    })
}

getSearchResults();