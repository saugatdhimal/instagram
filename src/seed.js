export function seedDatabase(firebase) {
    const users = [
      {
        userId: 'IE0jwanaeRYArjfRaPihd5cOcEq2',
        username: 'karl',
        fullName: 'Karl Hadwen',
        emailAddress: 'karlhadwen@gmail.com',
        following: ['MxPMNmufvzNmmhvQbYscTQinwVu2','g88q4PE2WYXj6yfQbr5wDC6LFgT2','owvy45PXgUf7QoTbDPDqENRk3bU2'],
        followers: ['MxPMNmufvzNmmhvQbYscTQinwVu2'],
        dateCreated: Date.now()
      },
      {
        userId: 'MxPMNmufvzNmmhvQbYscTQinwVu2',
        username: 'raphael',
        fullName: 'Raffaello Sanzio da Urbino',
        emailAddress: 'raphael@sanzio.com',
        following: ['IE0jwanaeRYArjfRaPihd5cOcEq2'],
        followers: ['IE0jwanaeRYArjfRaPihd5cOcEq2'],
        dateCreated: Date.now()
      },
      {
        userId: 'owvy45PXgUf7QoTbDPDqENRk3bU2',
        username: 'dali',
        fullName: 'Salvador Dalí',
        emailAddress: 'salvador@dali.com',
        following: [],
        followers: ['IE0jwanaeRYArjfRaPihd5cOcEq2'],
        dateCreated: Date.now()
      },
      {
        userId: 'g88q4PE2WYXj6yfQbr5wDC6LFgT2',
        username: 'orwell',
        fullName: 'George Orwell',
        emailAddress: 'george@orwell.com',
        following: [],
        followers: ['IE0jwanaeRYArjfRaPihd5cOcEq2'],
        dateCreated: Date.now()
      }
    ];
  
    // eslint-disable-next-line prefer-const
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
    // eslint-disable-next-line prefer-const
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: 'MxPMNmufvzNmmhvQbYscTQinwVu2',
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