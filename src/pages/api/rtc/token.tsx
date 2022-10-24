import type { NextApiRequest, NextApiResponse } from 'next';
import { AGORA_APP_CERTIFICATE, AGORA_APP_ID } from '../../../../constants';

async function GenerateAgoraToken(req: NextApiRequest, resp: NextApiResponse) {
  const { RtcTokenBuilder, RtcRole } = require('agora-access-token');
  const dotenv = require('dotenv');

  // async (id: string) => {

  //   if (results.data?.status === 201) {
  //     router.push('/dashboard');
  //   }
  // };

  resp.setHeader('Access-Control-Allow-Origin', '*');

  // http://localhost:3000/api/rtc/token?channel=test&role=publisher&tokentype=uid&uid=cl95t2gch00000k9fudd6b9b2
  let { channel, role, tokentype, uid, expire } = req.query;

  if (!channel) {
    return resp.status(500).json({ error: 'channel is required' });
  }

  if (!uid || uid === '') {
    return resp.status(500).json({ error: 'uid is required' });
  }

  if (role === 'publisher') {
    role = RtcRole.PUBLISHER;
  } else if (role === 'audience') {
    role = RtcRole.SUBSCRIBER;
  } else {
    return resp.status(500).json({ error: 'role is incorrect' });
  }

  let expireTime: number = 0;
  if (!expire || expire === '') {
    expireTime = 3600;
  } else {
    expireTime = parseInt(expire[0], 10);
  }

  const currentTime = Math.floor(Date.now() / 1000);
  const privilegeExpireTime = currentTime + expireTime;

  let token;
  if (tokentype === 'userAccount') {
    token = RtcTokenBuilder.buildTokenWithAccount(
      AGORA_APP_ID,
      AGORA_APP_CERTIFICATE,
      channel,
      uid,
      role,
      privilegeExpireTime
    );
  } else if (tokentype === 'uid') {
    token = RtcTokenBuilder.buildTokenWithUid(
      AGORA_APP_ID,
      AGORA_APP_CERTIFICATE,
      channel,
      uid,
      role,
      privilegeExpireTime
    );
  } else {
    return resp.status(500).json({ error: 'token type is invalid' });
  }

  return resp.json({ rtcToken: token });
}

export default GenerateAgoraToken;
