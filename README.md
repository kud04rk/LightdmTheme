# Lightdm Theme Web-greeter

This is a lightdm theme that is based of web-greeter.

# Features

- Anime Themed
- Gradient and animated Background

## Dependencies

Install this before proceeding.

- web-greeter : https://github.com/JezerM/web-greeter

## Rquirements

- Display size: 1920x1080 or 1376x768

# How to use

## Git clone this repository

```
git clone https://github.com/kud04rk/LightdmTheme.git
```

## Move the files to web greeter folder

```
cp -r $HOME/LightdmTheme /usr/share/web-greeter/themes/
```

### Make the following below changes (as root)

```
sed -i 's/^#greeter-session=example-gtk-gnome/greeter-session=web-greeter/' /etc/lightdm/lightdm.conf
sed -i 's/^#user-session=default/user-session=openbox/' /etc/lightdm/lightdm.conf
sed -i 's/^theme=gruvbox/theme=LightdmTheme/' /etc/lightdm/web-greeter.yml
```

## For help You can refer to the below git where I have mentioned any possible errors and solutions

This is used in Openbox install script.

https://github.com/kud04rk/OpenboxInstall.git

## Screenshot

![image](https://user-images.githubusercontent.com/23277835/159974091-ce13fe29-edfa-4d3e-9b0c-3c86add4a830.png)
