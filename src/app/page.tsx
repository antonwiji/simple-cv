"use client";

import { useRef } from "react";
import {useFieldArray, useForm} from "react-hook-form";
import {
  Group,
  Panel,
  Separator,
} from "react-resizable-panels";
import InputField from "@/components/core/InputField";
import TextAreaField from "@/components/core/TextAreaField";
import tempalte from "././../template/template.json";
import BasicTemplate from "@/template/BasicTamplate";
import MultiInputField from "@/components/MultiInputField";
import CardGroup from "@/components/CardGroup";
import DescItem from "@/components/DescItem";
import { useReactToPrint } from "react-to-print";

export default function Home() {
  const {control, register, watch } = useForm<any>({
      defaultValues: tempalte
  });

    const { fields, append, remove } = useFieldArray({
      control,
        name: "languages"
    });

  const { fields: workField, append: appendWork, remove: workRemove } = useFieldArray({
      control,
      name:  "workExp"
  });

  const { fields: educationField, append: educationAppend, remove: educationRemove } = useFieldArray({
      control,
      name:  "education"
  });

  const { fields: skillsField, append: skillsAppend, remove: skillsRemove } = useFieldArray({
        control,
        name:  "skills"
  });

    const { fields: certificatesField, append: certificatesAppend, remove: certificatesRemove } = useFieldArray({
        control,
        name:  "certificates"
    });

  const data = watch();
  // const previewRef = useRef<HTMLDivElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);
  const handleDownload =  useReactToPrint({ contentRef });

  return (

      <div className="h-screen flex flex-col">
        {/* 🔥 Sticky Toolbar */}
        <div className="h-14 bg-white shadow flex items-center justify-between px-6 sticky top-0 z-50">
          <h1 className="font-bold">DevCV Builder</h1>
          <button
              onClick={handleDownload}
              className="bg-black text-white px-4 py-2 rounded"
          >
            Download PDF
          </button>
        </div>

        {/* Content */}
        <div className="flex-1">
          <Group>

            {/* LEFT PANEL */}
            <Panel defaultSize={40}>
                <div className={"overflow-scroll h-screen"}>
                        <div className="p-6 bg-gray-100 h-full overflow-auto">
                            <CardGroup title="Personal Info">
                            <InputField
                                {...register("name")}
                                id={"name"}
                                placeholder="Full Name"
                                alt="Full Name"
                                value={data.name}
                            />
                            <InputField
                                {...register("phone")}
                                id={"phone"}
                                placeholder="Phone"
                                value={data.phone}
                            />
                            <InputField
                                {...register("email")}
                                id={"email"}
                                placeholder="Email"
                                value={data.email}
                            />
                            <InputField
                                {...register("linkedin")}
                                id={"linkedin"}
                                placeholder="Linkedin"
                                value={data.linkedin}
                            />
                            <InputField
                                {...register("github")}
                                id={"github"}
                                placeholder="Github"
                                value={data.github}
                            />
                            <InputField
                                {...register("profileWeb")}
                                id={"profileWeb"}
                                placeholder="Profile Web"
                                value={data.profileWeb}
                            />
                            <TextAreaField
                                {...register("summary")}
                                id={"summary"}
                                placeholder={"Summary"}
                                alt="Summary"
                                value={data.summary}
                            />
                            </CardGroup>
                    <CardGroup
                        title="Work Experience"
                    >
                    {
                        workField.map((data, index) => {
                            return(
                                <CardGroup
                                    key={index}
                                    panelClosed={true}
                                    onRemoveField={() => {
                                        workRemove(index)
                                    }}
                                >
                                    <InputField
                                        key={`nameCompany-${index}`}
                                        {...register(`workExp.${index}.nameCompany`)}
                                        placeholder="Company Name"
                                    />
                                    <InputField
                                        key={`addressCompany-${index}`}
                                        {...register(`workExp.${index}.addressCompany`)}
                                        placeholder="Address Company"
                                    />
                                    <InputField
                                        key={`startWork-${index}`}
                                        {...register(`workExp.${index}.startWork`)}
                                        placeholder="Start Work"
                                    />
                                    <InputField
                                        key={`endWork-${index}`}
                                        {...register(`workExp.${index}.endWork`)}
                                        placeholder="End Work"
                                    />
                                    <CardGroup
                                        title="Work Details"
                                    >
                                        <DescItem
                                            key={data.id}
                                            control={control}
                                            index={index}
                                            register={register}
                                        />
                                    </CardGroup>
                               </CardGroup>
                            )
                        })
                    }
                        <div onClick={() => appendWork({
                            nameCompany: "",
                            addressCompany: "",
                            startWork: "",
                            endWork: "",
                            workDisc: []
                        })} className="flex justify-center bg-gray-200 hover:bg-gray-300 rounded cursor-pointer w-full">
                            +
                        </div>
                    </CardGroup>
                    <CardGroup
                        title="Education"
                    >
                        {educationField.map((data, index) => (
                            <CardGroup
                                key={`education-${index}`}
                                panelClosed={true}
                                onRemoveField={() => {
                                    educationRemove(index)
                                }}
                            >
                                <InputField
                                    placeholder={"Name University"}
                                    key={`educationName-${index}`}
                                    {...register(`education.${index}.educationName`)}
                                />
                                <InputField
                                    placeholder={"Description"}
                                    key={`educationDesc-${index}`}
                                    {...register(`education.${index}.educationDesc`)}
                                />
                                <InputField
                                    placeholder={"Start"}
                                    key={`startEducation-${index}`}
                                    {...register(`education.${index}.startEducation`)}
                                />
                                <InputField
                                    placeholder={"end"}
                                    key={`endEducation-${index}`}
                                    {...register(`education.${index}.endEducation`)}
                                />

                            </CardGroup>
                        ))}

                        <div onClick={() => educationAppend(" ")} className="flex justify-center bg-gray-200 hover:bg-gray-300 rounded cursor-pointer w-full">
                            +
                        </div>

                    </CardGroup>
                            <CardGroup
                                title="Skills"
                            >
                                {skillsField.map((data, index) => (
                                    <MultiInputField
                                        key={index}
                                        {...register(`skills.${index}`)}
                                        onRemoveField={() => {
                                            skillsRemove(index)
                                        }}
                                    />
                                ))}

                                <div onClick={() => skillsAppend(" ")} className="flex justify-center bg-gray-200 hover:bg-gray-300 rounded cursor-pointer w-full">
                                    +
                                </div>
                            </CardGroup>
                    <CardGroup
                        title="Languages"
                    >
                        {fields.map((data, index) => (
                            <MultiInputField
                                key={index}
                                {...register(`languages.${index}`)}
                                onRemoveField={() => {
                                    remove(index)
                                }}
                            />
                        ))}

                        <div onClick={() => append(" ")} className="flex justify-center bg-gray-200 hover:bg-gray-300 rounded cursor-pointer w-full">
                            +
                        </div>
                    </CardGroup>
                    <CardGroup
                        title="Certificates"
                    >
                        {certificatesField.map((data, index) => (
                            <MultiInputField
                                key={index}
                                {...register(`certificates.${index}`)}
                                onRemoveField={() => {
                                    certificatesRemove(index)
                                }}
                            />
                        ))}

                        <div onClick={() => certificatesAppend(" ")} className="flex justify-center bg-gray-200 hover:bg-gray-300 rounded cursor-pointer w-full">
                            +
                        </div>
                    </CardGroup>
                </div>
                </div>
            </Panel>
              <Separator className="w-2 bg-gray-300"/>
              {/* RIGHT PANEL */}
              <Panel defaultSize={60}>
                  <div className="h-full overflow-scroll h-screen bg-gray-200 flex justify-center py-10">
                    <div ref={contentRef}>
                        <BasicTemplate data={data} />
                    </div>
              </div>
            </Panel>

          </Group>
        </div>

        <style jsx global>{`
        .input {
          width: 100%;
          border: 1px solid #ddd;
          padding: 8px;
          margin-bottom: 10px;
          border-radius: 4px;
        }

        .resume-wrapper {
          width: 794px;
        }

        .resume-page {
            width: 210mm;
            height: 297mm;
            background: #ffffff;
            padding: 20mm;
            box-sizing: border-box;
            overflow: hidden;
        }
        
      `}</style>
      </div>
  );
}
