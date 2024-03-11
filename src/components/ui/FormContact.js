import React, { useState } from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFormUtils, useDevice } from "../../hooks";
import { Form } from "./Form";
import { currentConfig } from "../../firebase";
import { FormButton, Input, Select, TextArea, notification } from "../ui";
import { phoneCodes } from "../../data-list";
import styled from "styled-components";

export const FormContact = () => {
  const { isMobile } = useDevice();

  const [loadingContact, setLoadingContact] = useState(false);

  const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    degree: yup.string().required(),
    dni: yup.string().required().min(8),
    cip: yup.string().required().min(9),
    situation: yup.string().required(),
    departament: yup.string().required(),
    province: yup.string().required(),
    district: yup.string().required(),
    phone: yup.number().required(),
    email: yup.string().email().required(),
    suggestionComplaint: yup.string().required(),
  });

  const {
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { required, error } = useFormUtils({ errors, schema });

  console.log(errors);

  const onSubmitFetchContacts = async (formData) => {
    try {
      console.log(formData);
      setLoadingContact(true);
      const contact = mapContactData(formData);
      const response = await fetchSendEmail(contact);

      if (!response.ok) throw new Error(response.statusText);

      notification({ type: "success", title: "Enviado exitosamente" });
    } catch (e) {
      notification({ type: "error", placement: "topLeft" });
    } finally {
      setLoadingContact(false);
      onResetForm();
    }
  };

  const fetchSendEmail = async (contact) =>
    await fetch(`${currentConfig.apiServitecSales}/generic/contact`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": null,
        "content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(contact),
    });

  const mapContactData = (formData) => ({
    contact: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      degree: formData.degree,
      dni: formData.dni,
      cip: formData.cip,
      situation: formData.situation,
      departament: formData.departament,
      province: formData.province,
      district: formData.district,
      phone: {
        number: formData.phoneNumber,
        countryCode: formData.countryCode,
      },
      email: formData.email,
      suggestionComplaint: formData.suggestionComplaint,
      hostname: "cobiene-mil-pe.web.app",
    },
  });

  const onResetForm = () =>
    reset({
      firstName: "",
      lastName: "",
      degree: "",
      dni: "",
      cip: "",
      situation: "",
      departament: "",
      province: "",
      district: "",
      phone: "",
      email: "",
      suggestionComplaint: "",
    });

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmitFetchContacts)}>
        <Row gutter={[16, 15]}>
          <Col xs={24} sm={24} md={12}>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Ingrese nombres"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                />
              )}
            />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Ingrese apellidos"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                />
              )}
            />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Controller
              name="degree"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Ingrese su grado"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                />
              )}
            />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Controller
              name="dni"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Ingrese su DNI"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                />
              )}
            />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Controller
              name="cip"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Ingrese su CIP"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                />
              )}
            />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Controller
              name="situation"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Select
                  label="Situación"
                  value={value}
                  onChange={(value) => onChange(value)}
                  error={error(name)}
                  required={required(name)}
                  isMobile={isMobile}
                  options={[
                    { value: "actividad", label: "Actividad" },
                    { value: "retiro", label: "Retiro" },
                  ]}
                />
              )}
            />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Controller
              name="departament"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Ingrese su departamento"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                />
              )}
            />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Controller
              name="province"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Ingrese su provincia"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                />
              )}
            />
          </Col>
          <Col span={24}>
            <Controller
              name="district"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Ingrese su distrito"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                />
              )}
            />
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Controller
              name="countryCode"
              control={control}
              defaultValue="+51"
              render={({ field: { onChange, value, name } }) => (
                <Select
                  label="Código"
                  value={value}
                  onChange={(value) => onChange(value)}
                  error={error(name)}
                  required={required(name)}
                  isMobile={isMobile}
                  options={phoneCodes.map((phoneCode) => ({
                    code: phoneCode.code,
                    value: phoneCode.dial_code,
                    label: `${phoneCode.name} (${phoneCode.dial_code})`,
                  }))}
                />
              )}
            />
          </Col>
          <Col xs={24} sm={24} md={16}>
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Ingrese su celular"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                />
              )}
            />
          </Col>
          <Col span={24}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Ingrese email"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                />
              )}
            />
          </Col>
          <Col span={24}>
            <Controller
              name="suggestionComplaint"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <TextArea
                  label="Sugerencia/Reclamo"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                  style={{borderRadius: 0}}
                />
              )}
            />
          </Col>
          <Col span={24}>
            <FormButton
              htmlType="submit"
              loading={loadingContact}
              disabled={loadingContact}
            >
              Enviar
            </FormButton>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

const Container = styled.section`
  Form {
    max-width: 600px;
    margin: 0 auto;
    }

    input {
      height: 2.5rem;
      color: #fff;
      border-radius: 0;
    }

    textarea {
      height: 200px;
      border-radius: none;
      color: #fff;
    }
`;
