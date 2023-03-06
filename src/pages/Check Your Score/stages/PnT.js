import React from "react";
import { DropDown, Input, TextArea } from "../../../components/AlgoInput/Input";
import { toast } from "react-toastify";
import styles from "./stages.module.css";
import { scoredData, nonscoredData } from "./scores";

const PnT = ({ setStage, setData, data, score, setScore }) => {
  console.log(score);
  const handleNext = () => {
    if (Object.keys(data).length < 8) {
      toast.error("Kindly Fill All Mandatory Fields");
    } else {
      console.log(data);
      setStage((prev) => prev + 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleDropdown = (e) => {
    const { name, value } = e.target;
    const score_of_var = scoredData[name].filter(
      (val) => val.value === value
    )[0].score;
    setScore((prev) => ({
      ...prev,
      ["Pnt"]: score.Pnt + score_of_var,
    }));
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className={styles.stages_container}>
      {/* <ToastContainer /> */}
      <h3>Product & Technology</h3>
      <div className={styles.stage_form}>
        <div className={styles.input_flex}>
          <Input
            value={data?.company_name}
            name={"company_name"}
            onChange={(e) => handleChange(e)}
            title={"Company Name"}
            placeholder={"Enter here"}
            type={"text"}
          />
          <Input
            value={data?.incor_date}
            name={"incor_date"}
            onChange={(e) => handleChange(e)}
            title={"Incorporation Date"}
            placeholder={"Enter here"}
            type={"date"}
          />
        </div>
        <div className={styles.input_flex}>
          <Input
            value={data?.country}
            title={"Country"}
            name={"country"}
            onChange={(e) => handleChange(e)}
            placeholder={"Enter here"}
            type={"text"}
          />
          <Input
            title={"State"}
            value={data?.state}
            name={"state"}
            onChange={(e) => handleChange(e)}
            placeholder={"Enter here"}
            type={"text"}
          />
        </div>
        <div className={styles.input_flex}>
          <DropDown
            value={data?.pri_tech}
            title={"Primary Technology"}
            name={"pri_tech"}
            nonscored={true}
            onChange={(e) => handleChange(e)}
            options={nonscoredData.tech_used}
          />
          <DropDown
            value={data?.sec_tech}
            title={"Secondary Technology"}
            name={"sec_tech"}
            nonscored={true}
            onChange={(e) => handleChange(e)}
            options={nonscoredData.tech_used}
          />
        </div>
        <DropDown
          value={data?.ter_tech}
          title={"Tertiary Technology"}
          name={"ter_tech"}
          nonscored={true}
          onChange={(e) => handleChange(e)}
          options={nonscoredData.tech_used}
        />
        <DropDown
          name={"motivation"}
          options={scoredData.motivation}
          value={data?.motivation}
          onChange={(e) => handleDropdown(e)}
          title={"What made you create the solution? - Motivation"}
        />
        <DropDown
          name={"tech_based"}
          value={data?.tech_based}
          options={scoredData.tech_based}
          onChange={(e) => handleDropdown(e)}
          title={
            "If product/solution is tech-based in nature (e.g a platform/technology product), will it be developed in-house?"
          }
        />
        <div className={styles.input_flex}>
          <DropDown
            value={data?.prod_stage}
            title={"Stage of Product/Service Development"}
            name={"prod_stage"}
            onChange={(e) => handleDropdown(e)}
            options={scoredData.prod_stage}
          />
          <DropDown
            name={"primary_offer"}
            value={data?.primary_offer}
            onChange={(e) => handleChange(e)}
            title={"Primary Offering"}
            nonscored={true}
            options={nonscoredData.primary_offer}
          />
        </div>
        <div className={styles.input_flex}>
          <DropDown
            name={"industry"}
            value={data?.industry}
            onChange={(e) => handleChange(e)}
            title={"Which Tech Industry is your Company in?"}
            nonscored={true}
            options={nonscoredData.industry}
          />
          <DropDown
            title={"Sub Industry"}
            value={data?.sub_industry}
            name={"sub_industry"}
            onChange={(e) => handleChange(e)}
            nonscored={true}
            options={nonscoredData.industry}
          />
        </div>
        <div className={styles.input_flex}>
          <DropDown
            name={"domain"}
            value={data?.domain}
            onChange={(e) => handleChange(e)}
            title={"Which domain does your startup cater to?"}
            nonscored={true}
            options={nonscoredData.domain}
          />
          <DropDown
            name={"customer_segment"}
            value={data?.customer_segment}
            onChange={(e) => handleChange(e)}
            title={"Customer Segment"}
            nonscored={true}
            options={nonscoredData.customer_segment}
          />
        </div>
        <TextArea
          name={"business_kw"}
          value={data?.business_kw}
          onChange={(e) => handleChange(e)}
          title={
            "Help us understand your business better with upto 10 related keywords"
          }
          placeholder={"Enter here"}
        />
        <div className={styles.input_flex}>
          <DropDown
            name={"ismoat"}
            value={data?.ismoat}
            onChange={(e) => handleChange(e)}
            title={"Does your business have a MOAT?"}
            nonscored={true}
            options={nonscoredData.ismoat}
          />
          <DropDown
            name={"moat"}
            value={data?.moat}
            onChange={(e) => handleDropdown(e)}
            title={"What MOAT's does your business have/will potentially have?"}
            options={scoredData.moat}
          />
        </div>
        <DropDown
          name={"pro_risk"}
          value={data?.pro_risk}
          onChange={(e) => handleDropdown(e)}
          title={
            "Is your product exposed to any form of risk currently/will be in future?"
          }
          options={scoredData.pro_risk}
        />
      </div>
      <div className={styles.btn_div}>
        {/* <button className={styles.backbtn}>&lt; Back</button> */}
        <button className={styles.nextbtn} onClick={handleNext}>
          {" "}
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default PnT;
