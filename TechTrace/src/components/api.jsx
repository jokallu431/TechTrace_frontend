function verifyUser(token, resolve, reject) {
    const myHeaders = new Headers();
    
    myHeaders.append("Authorization", `Bearer ${token}`);
    
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    
    fetch("http://localhost:4000/users/verify", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          resolve(result);
        })
        .catch(() => {
          reject(null);
        });
  
    }

    function loadUserList(resolve, reject) {
      const requestOptions = {
          method: "GET",
          redirect: "follow"
        };
        
        fetch("http://localhost:4000/users/technician_list", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            resolve(result);
          })
          .catch(() => {
            reject(null);
          });
      }

export { verifyUser,loadUserList};