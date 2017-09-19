FROM ruby:2.4.2
RUN apt-get update -qq && \
    apt-get install -y apt-utils \
                       build-essential \
                       libpq-dev \
                       nodejs \
                       mysql-client
RUN mkdir -p /app/app_name
WORKDIR /app/app_name
ADD app_name/Gemfile /app/app_name/Gemfile
ADD app_name/Gemfile.lock /app/app_name/Gemfile.lock
RUN bundle install -j4

EXPOSE 3000
