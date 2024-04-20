import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-facebook';
import { AuthService } from '../auth.service';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super({
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: `${process.env['ROOT_SERVER']}/api/auth/facebook/redirect`,
      scope: 'email',
      profileFields: ['emails', 'name', 'picture.type(large)'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
  ): Promise<any> {
    const { name, emails, photos } = profile;
    let finalName = 'Anonymous';
    if (name.familyName) finalName = name.familyName;
    if (name.middleName) finalName += ' ' + name.middleName;
    if (name.givenName) finalName += ' ' + name.givenName;
    const user = await this.authService.validateUserOAuth({
      email: emails[0].value,
      name: finalName.trim(),
      avatar: photos[0].value,
    });
    return user || null;
  }
}
