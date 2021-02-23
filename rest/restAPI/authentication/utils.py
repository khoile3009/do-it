from django.contrib.auth import authenticate

import json

import jwt
import requests
from six.moves.urllib import request
from cryptography.x509 import load_pem_x509_certificate
from cryptography.hazmat.backends import default_backend


def jwt_get_username_from_payload_handler(payload):
    username = payload.get('sub').replace('|', '.')
    authenticate(remote_user=username)
    return username


def jwt_decode_token(token):
    header = jwt.get_unverified_header(token)
    jwks = requests.get(
        'https://{}/.well-known/jwks.json'.format('doitapplication.us.auth0.com')).json()
    public_key = None
    for jwk in jwks['keys']:
        if jwk['kid'] == header['kid']:
            public_key = jwt.algorithms.RSAAlgorithm.from_jwk(json.dumps(jwk))

    if public_key is None:
        raise Exception('Public key not found.')

    issuer = 'https://{}/'.format('doitapplication.us.auth0.com')
    return jwt.decode(token, public_key, audience='https://doitapplication.us.auth0.com/api/v2/', issuer=issuer, algorithms=['RS256'])


def CONFIGURE_AUTH0(AUTH0_DOMAIN):
    if AUTH0_DOMAIN:
        jsonurl = request.urlopen(
            'https://' + AUTH0_DOMAIN + '/.well-known/jwks.json')
        jwks = json.loads(jsonurl.read().decode('utf-8'))
        cert = '-----BEGIN CERTIFICATE-----\n' + \
            jwks['keys'][0]['x5c'][0] + '\n-----END CERTIFICATE-----'
        certificate = load_pem_x509_certificate(
            cert.encode('utf-8'), default_backend())
        PUBLIC_KEY = certificate.public_key()
        JWT_ISSUER = 'https://' + AUTH0_DOMAIN + '/'
