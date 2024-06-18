import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Box, Text } from '@chakra-ui/react';

const QRGenerator = ({ action, datetime }) => {
  const qrData = {
    type: action,
    datetime: datetime,
  };

  return (
    <Box p={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
      <Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
        <QRCodeSVG value={JSON.stringify(qrData)} style={{ width: "100%", height: "100%" }} />
      </Box>
    </Box>
  );
};

export default QRGenerator;
