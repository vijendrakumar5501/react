import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosComp = () => {
  const [data1, setdata1] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [form, setform] = useState({
    name: "",
    email: "",
  });

  const url = "url";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(form);
  };

  const fetch = async () => {
    try {
      const data = await axios.get(url);

      setdata1(data.data);
      // debugger
      console.log(data1);
    } catch (error) {
      console.log(error);
    }
  };

  const postData = async (form) => {
    if (form.name == "" || form.email == "") {
      alert("enter the data");
      return;
    }
    try {
      const response = await axios.post(url, form);
      if (response.status === 201) {
        fetch();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const updatetData = async (form,id) => {
    if (form.name == "" || form.email == "") {
      alert("enter the data");
      return;
    }
    try {
      const response = await axios.put(`${url}/${id}`, form);
      if (response.status ===200) {
        console.log(response.status)
        fetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);


  const handleEdit=(data,editMode)=>{
    console.log(data)
  setIsEdit(editMode);

    setform(data)
  }

  return (
    <div className="mt-[20px] flex justify-center items-center w-[100%]">
      <div className="  ">
        <form className="mb-[20px]">
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            value={form.email}
            placeholder="email"
            onChange={handleChange}
          />
          <button className="bg-gray-500 px-[20px] text-white py-[10px] items-center cursor-pointer" type="button" onClick={() => {isEdit?updatetData(form,form.id):postData(form)}}>

            {isEdit? 'Save':'post'}
          </button>
        </form>

        <div className=" ">
          {data1.map((data) => {
            return (
              <div className="bg-gray-300 w-[50%]  mb-[60px] h-[150px]    mx-auto   ">
                <div className="w-[100%]">
                  <p> Name :{data.name} </p>
                  <p> Email :{data.email} </p>
                  <button className="bg-gray-500 px-[30px] py-[10px] text-white mt-[10px] cursor-pointer  block mx-auto w-[100px]"  onClick={()=>handleEdit(data,true)}>edit</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AxiosComp;
