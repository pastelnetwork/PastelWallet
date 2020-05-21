import { ipcMain } from 'electron';
import log from 'electron-log';
import { RESPONSE_STATUS_ERROR, RESPONSE_STATUS_OK } from '../constants';

const getProfileHandler = (event, data) => {
  // TODO: fetch profile from DB using pastel ID (data.pastelid)
  const profileData = {
    photo: null,
    firstName: 'Alex',
    lastName: 'Dobrushskiy',
    phone: '+79200393289',
    email: 'a.dobrushskiy@gmail.com',
    fetched: true
  };
  event.reply('getProfileResponse', {
    status: RESPONSE_STATUS_OK,
    data: profileData
  });
  // event.reply('getProfileResponse', {
  //   status: RESPONSE_STATUS_ERROR,
  //   msg: 'Error fetching profile'
  // });
};

const saveProfileHandler = (event, data) => {
  // TODO: save data to DB
  const { firstName, lastName, phone, email, photo, pastelid } = data;

  const profileData = { firstName, lastName, phone, email, photo, fetched: true };
  event.reply('saveProfileResponse', {
    status: RESPONSE_STATUS_OK,
    data: profileData
  });
  // event.reply('getProfileResponse', {
  //   status: RESPONSE_STATUS_ERROR,
  //   msg: 'Error fetching profile'
  // });
};

ipcMain.on('getProfile', getProfileHandler);
ipcMain.on('saveProfile', saveProfileHandler);
