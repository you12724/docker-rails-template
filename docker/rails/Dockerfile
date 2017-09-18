FROM ruby:2.3.0
RUN apt-get update -qq && \
    apt-get install -y apt-utils \
                       build-essential \
                       libpq-dev \
                       nodejs \
                       mysql-client
RUN mkdir -p /app/src
WORKDIR /app/src
ADD ./src/Gemfile /app/src/Gemfile
ADD ./src/Gemfile.lock /app/src/Gemfile.lock
RUN bundle install -j4
ADD . /app

EXPOSE 3000
