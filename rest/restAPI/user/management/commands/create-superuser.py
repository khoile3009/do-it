from django.contrib.auth.management.commands import createsuperuser
from django.core.management import CommandError

class Command(createsuperuser.Command):
    help = 'Create a superuser with a password and phone_number non-interactively'

    def add_arguments(self, parser):
        super(Command, self).add_arguments(parser)
        parser.add_argument(
            '--password', dest='password', default=None,
            help='Specifies the password for the superuser.',
        )
        parser.add_argument(
            '--phone', dest='phone', default=None,
            help='Specifies the phone number for the superuser.',
        )

    def handle(self, *args, **options):
        options.setdefault('interactive', False)
        database = options.get('database')
        password = options.get('password')
        phone_number = options.get('phone')
        email = options.get('email')
        if not password or not phone_number or not email:
            raise CommandError(
                    "--email --phone and --password are required options")

        user_data = {
            'password': password,
            'email': email,
            "phone_number": phone_number
        }

        self.UserModel._default_manager.db_manager(
                database).create_superuser(**user_data)

        if options.get('verbosity', 0) >= 1:
            self.stdout.write("Superuser created successfully.")