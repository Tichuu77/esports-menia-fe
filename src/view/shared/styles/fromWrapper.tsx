import styled from 'styled-components';

const FormWrapper = styled.div`
  padding: 4px;
  padding-top: 0;
  padding-bottom: 0;

  .ant-form-item-label {
    white-space: normal;
  }

  .ant-form-item-with-help {
    margin-bottom: 24px;
  }

  .form-buttons {
    .ant-btn {
      margin-top: 8px;
      margin-right: 8px;
    }
  }
  .ant-form-inline .ant-form-item,
  .inline-sub-form input,
  .inline-sub-form select {
    min-width: 140px;
    margin-right: 2px;
  }
  .ant-form-inline .ant-form-item.form-buttons {
    min-width: 0px;
    .ant-btn {
      margin: 0px;
    }
  }
`;

export const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 6 },
    lg: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 18 },
    lg: { span: 12 },
  },
};

export const tailFormItemLayout = {
  wrapperCol: {
    md: {
      span: 18,
      offset: 6,
    },
    lg: {
      span: 12,
      offset: 4,
    },
  },
};

export const fluidItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 18 },
  },
};
export const labelAndColItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 10 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 14 },
  },
};

export default FormWrapper;
