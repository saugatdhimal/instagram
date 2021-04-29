export function seedDatabase(firebase) {
    const users = [
      {
        userId: 'dqmYlfS98bRs6KXexAeJMeGNjvr2',
        username: 'karl',
        fullName: 'Karl Hadwen',
        emailAddress: 'karlhadwen@gmail.com',
        following: [],
        followers: [],
        dateCreated: Date.now()
      },
      {
        userId: 'eet12gQI5khOFx5wVUzMLF4HeBU2',
        username: 'raphael',
        fullName: 'Raffaello Sanzio da Urbino',
        emailAddress: 'raphael@sanzio.com',
        following: [],
        followers: [],
        dateCreated: Date.now()
      },
      {
        userId: '9gf67kW7u8cAXL6SvnU5eGGMgbC3',
        username: 'dali',
        fullName: 'Salvador Dalí',
        emailAddress: 'salvador@dali.com',
        following: [],
        followers: [],
        dateCreated: Date.now()
      },
      {
        userId: 'Tv5jjDalZ1gO46EbonBonWsLqI72',
        username: 'orwell',
        fullName: 'George Orwell',
        emailAddress: 'george@orwell.com',
        following: [],
        followers: [],
        dateCreated: Date.now()
      }
    ];
  
    
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
    
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: 'eet12gQI5khOFx5wVUzMLF4HeBU2',
          imageSrc: `/images/users/raphael/${i}.jpg`,
          caption: 'Saint George and the Dragon',
          likes: [],
          comments: [
            {
              displayName: 'dali',
              comment: 'Love this place, looks like my animal farm!'
            },
            {
              displayName: 'orwell',
              comment: 'Would you mind if I used this picture?'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }