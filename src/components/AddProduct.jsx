import React from "react";
import {
  Modal,
  Button,
  ModalBody,
  Input,
  Select,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;

  return (
    <>
      <button data-cy='add-product-button'>
        Add new Product
      </button>
      <Modal>
        <ModalBody pb={6}>
          <Input data-cy='add-product-title' />
          <Select data-cy='add-product-category'>
            <option data-cy='add-product-category-shirt'>Shirt</option>
            <option data-cy='add-product-category-pant'>Pant</option>
            <option data-cy='add-product-category-jeans'>Jeans</option>
          </Select>
          <RadioGroup data-cy='add-product-gender'>
            <Radio data-cy='add-product-gender-male'>male</Radio>
            <Radio data-cy='add-product-gender-female'>female</Radio>
            <Radio data-cy='add-product-gender-unisex'>unisex</Radio>
          </RadioGroup>
          <Input data-cy='add-product-price' />
          <Button data-cy='add-product-submit-button'></Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
