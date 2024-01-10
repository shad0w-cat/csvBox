import { CSVBoxButton } from '@csvbox/react';
import { Button } from 'antd';

const CSVBox = (props) => {
  return (
    <CSVBoxButton
      licenseKey="Ey4fD5lx891Gx3QKbTLRNzktXvkWJv"
      user={{
        user_id: 'default123',
      }}
      onImport={(result, data) => {
        props.setUploaded();
        props.updateData(data.raw_file);
        // if (result) {
        //   console.log('success');
        //   console.log(data.row_success + ' rows uploaded');
        //   //custom code
        // } else {
        //   console.log('fail');
        //   //custom code
        // }
      }}
      render={(launch, isLoading) => {
        return (
          <Button
            type="primary"
            onClick={launch}
            loading={isLoading}
            size="large"
          >
            Upload file
          </Button>
        );
      }}
    >
      Import
    </CSVBoxButton>
  );
};

export default CSVBox;
