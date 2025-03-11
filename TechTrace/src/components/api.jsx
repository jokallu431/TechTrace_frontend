function verifyUser(token, resolve, reject) {
  const myHeaders = new Headers();

  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("https://tech-trace-backend.vercel.app/users/verify", requestOptions)
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
    redirect: "follow",
  };

  fetch("https://tech-trace-backend.vercel.app/users/technician_list", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      resolve(result);
    })
    .catch(() => {
      reject(null);
    });
}

function branchList(resolve, reject) {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("https://tech-trace-backend.vercel.app/branch/branch_list", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      resolve(result);
    })
    .catch(() => {
      reject(null);
    });
}

function branch_List_Id(branch_Id, resolve, reject) {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(`https://tech-trace-backend.vercel.app/branch/branch_list/${branch_Id}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      resolve(result);
    })
    .catch(() => {
      reject(null);
    });
}

function accessoriesList(resolve, reject) {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("https://tech-trace-backend.vercel.app/accessories/accessories_list", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      resolve(result);
    })
    .catch(() => {
      reject(null);
    });
}

function task_List(resolve, reject) {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("https://tech-trace-backend.vercel.app/task/task_list", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      resolve(result);
    })
    .catch(() => {
      reject(null);
    });
}

function task_List_Id(task_Id, resolve, reject) {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(`https://tech-trace-backend.vercel.app/task/task_list/${task_Id}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      resolve(result);
    })
    .catch(() => {
      reject(null);
    });
}

export { verifyUser, loadUserList, branchList, accessoriesList, task_List, task_List_Id, branch_List_Id };
