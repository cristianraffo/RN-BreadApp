import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Button,
} from 'react-native';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {signin, signup} from '../../store/actions/auth.action';
import {colors} from '../../constants/themes';
import Input from '../../components/atoms/input';

const Auth = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNotValid, setIsNotValid] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();

  const onChangeInput = (value, type) => {
    if (type === 'email') {
      setEmail(value);
    }
    if (type === 'password') {
      setPassword(value);
    }

    if (
      emailInputRef.current.state.validate &&
      passwordInputRef.current.state.validate
    ) {
      setIsNotValid(false);
    } else {
      setIsNotValid(true);
    }
  };

  const handleAuth = () => {
    if (isLogin) {
      dispatch(signin(email, password));
    } else {
      dispatch(signup(email, password));
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={50}
      enabled>
      <View style={styles.containerCard}>
        <Text style={styles.formTitle}>{isLogin ? 'Login' : 'Register'}</Text>
        <View style={styles.formContainer}>
          <Input
            ref={emailInputRef}
            label="Email"
            placeholder="Enter your email"
            placeholderTextColor={colors.placeholder}
            keyboardtype="email-address"
            type="email"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeInput={value => onChangeInput(value, 'email')}
            value={email}
            maxLength={60}
          />
          <Input
            ref={passwordInputRef}
            label="Password"
            placeholder="Enter your password"
            placeholderTextColor={colors.placeholder}
            type="password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            onChangeInput={value => onChangeInput(value, 'password')}
            value={password}
            maxLength={20}
          />
        </View>
        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.linkText}>
            {isLogin
              ? 'Dont have an account? Register'
              : 'Already have an account? Login'}
          </Text>
        </TouchableOpacity>
        <Button
          title={isLogin ? 'Login' : 'Register'}
          onPress={() => handleAuth()}
          disabled={isNotValid}
          color={colors.primaryColor}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Auth;
