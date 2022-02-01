# Running Skeef

_Go to the next page to read more about the setup_

Skeef accepts two command line arguments:

- `addr` - The address on which to serve the application, defaults
to `8080`.
- `reset` - Whether to reset the application (see below).

When Skeef is launched the first time you'll visit the application
at the `addr` you specified. You will then follow a short onboarding
to create an admin user.

Skeef uses an sqlite database to store a tiny amount of data, e.g.:
the setting for the streams you have created.

The `reset` flag resets everything, this means __you lose everything
that was in the database.__

__Example__

To serve the app on port 5000:

```bash
./skeef -addr=:5000
```

Use `-reset` to reset the database and recreate a new admin account.
