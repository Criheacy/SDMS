@LogExecution
    @ResponseBody
    @RequestMapping(value = "/modifyPassword", method = {RequestMethod.POST})
    public ModifyPasswordResponse modifyPassword(@RequestBody ModifyPasswordRequest request)
    {
        String newPassword = request.getNewPassword();
        String confirmNewPassword = request.getConfirmNewPassword();
        String oldPassword = request.getOldPassword();
        int length = newPassword.length();



        ModifyPasswordResponse response = new ModifyPasswordResponse();


        /**
         * 判断两次是否输入旧密码、旧密码是否正确
         */
        if (StringUtils.isBlank(oldPassword))
        {
            throw new BusinessException(107005,"旧密码为空");
        }

        if (!oldPassword.equals(DASASEEncryptUtil.decryptData(masProperties.getConfigPassword(), DASASEEncryptUtil.SECRETKEY)) )
        {
            throw new BusinessException(107006,"旧密码输入错误");
        }

        /**
         * 判断新密码是否为空、两次修改密码是否一致
         */
        if (StringUtils.isBlank(newPassword))
        {
            throw new BusinessException(107000,"新密码为空");
        }

        if (StringUtils.isBlank(confirmNewPassword))
        {
            throw new BusinessException(107001,"未输入确认新密码");
        }

        if (!newPassword.equals(confirmNewPassword))
        {
            throw new BusinessException(107002,"两次新密码输入不一致！");
        }

        /**
         * 判断密码是否过短(不低于5位）
         */
        if (length < 6)
        {
            throw new BusinessException(107003,"新密码长度过短");
        }


        /**
         * 判断密码是否有大小写区分
         */
        int lowerNum = 0;
        int upperNum = 0;
        for (int i = 0; i < length ; i++ ) {

            char passwordCh = newPassword.charAt(i);

            if (Character.isLowerCase(passwordCh)) {

                lowerNum++;

            }

            if (Character.isUpperCase(passwordCh)) {

                upperNum++;

            }
        }

        if (lowerNum == 0 || upperNum == 0){

            throw new BusinessException(107004, "新密码需要大小写");

        }


        String pwd = DASASEEncryptUtil.encryptData(newPassword, DASASEEncryptUtil.SECRETKEY);
        request.setNewPassword(pwd);
        Properties properties = saveProperties(request);
        refreshPassword(properties);

        return response;
    }
