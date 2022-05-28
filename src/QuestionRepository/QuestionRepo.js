const axios = require("axios").default;
export async function postData(datas) {
  try {
    await axios.post(
      "https://61f0e50b072f86001749eedf.mockapi.io/userdata",
      datas
    );
  } catch (error) {
    console.log("post method error", error);
  }
}
export async function getData() {
  try {
    let stddata = await axios.get(
      "https://61f0e50b072f86001749eedf.mockapi.io/userdata"
    );
    return stddata.data;
  } catch (error) {
    console.log("get method error", error);
  }
}
export async function deleteData(id) {
  try {
    await axios.delete(
      `https://61f0e50b072f86001749eedf.mockapi.io/userdata/${id}`
    );
  } catch (error) {
    console.log("get method error", error);
  }
}
export async function singleData(id) {
  try {
    let singleStddata = await axios.get(
      `https://61f0e50b072f86001749eedf.mockapi.io/userdata/${id}`
    );
    return singleStddata.data;
  } catch (error) {
    console.log("get method error", error);
  }
}
export async function editData(id, datas) {
  try {
    await axios.put(
      `https://61f0e50b072f86001749eedf.mockapi.io/userdata/${id}`,
      datas
    );
  } catch (error) {
    console.log("get method error", error);
  }
}
